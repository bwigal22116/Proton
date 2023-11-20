pc.script.attribute('from', 'vector');
pc.script.attribute('to', 'vector');
pc.script.attribute('duration', 'number', 0.5);
pc.script.attribute('easing', 'string', 'Linear.None');
pc.script.attribute('reverseAfter', 'number', 1);
pc.script.attribute('disableOnEnd', 'boolean', false);

pc.script.create('ui_tweener', function (context) {
    var Ui_tweener = function (entity) {
        this.entity = entity;
    };

    Ui_tweener.prototype = {
        initialize: function () {
            this.ui = this.entity.script.font_renderer || this.entity.script.sprite;
        },

        onEnable: function () {
            this.playingReverse = false;
            this.ui.userOffset.set(this.from[0], this.from[1]);
            this.startTween(this.from, this.to);
        },

        startTween: function (from, to, delay) {
            var self = this;
            var easingParts = this.easing.split('.');
            var easing = TWEEN.Easing[easingParts[0]][easingParts[1]];

            this.tween = new TWEEN.Tween({
                x: from[0],
                y: from[1]
            })
            .to({
                x: to[0],
                y: to[1]
            }, self.duration * 1000)
            .easing(easing)
            .delay(delay === undefined ? 0 : delay)
            .onUpdate(function () {
                self.ui.userOffset.set(this.x, this.y);
            })
            .onComplete(function () {
                self.tween = null;
                if (self.reverseAfter > 0 && !self.playingReverse) {
                    self.playingReverse = true;
                    self.startTween(to, from, self.reverseAfter * 1000)
                } else {
                    if (self.disableOnEnd) {
                        self.entity.enabled = false; 
                    }
                }
            }).start();
        },

        onDisable: function () {
            if (this.tween) {
                this.tween.stop();
                this.tween = null;
            }
        }
    };

    return Ui_tweener;
});