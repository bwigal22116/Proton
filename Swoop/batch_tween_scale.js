pc.script.attribute('from', 'vector', [1,1,1]);
pc.script.attribute('to', 'vector', [1,1,1]);
pc.script.attribute('duration', 'number', 1);
pc.script.attribute('easing', 'string', 'Quadratic.InOut');

pc.script.create('batch_tween_scale', function (context) {
    var Batch_tween_scale = function (entity) {
        this.entity = entity;
        this.entities = [];
    };

    Batch_tween_scale.prototype = {
        registerEntity: function (entity) {
            this.entities.push({
                entity: entity,
                scale: entity.getLocalScale().clone()
            });
        },

        initialize: function () {
            this.startTween(this.from, this.to);
        },

        startTween: function (from, to) {
            var self = this;
            var easingParts = this.easing.split('.');

            this.tween = new TWEEN.Tween({ 
                x: from[0],
                y: from[1],
                z: from[2]
            }).to({ 
                x: to[0],
                y: to[1],
                z: to[2]
            }, self.duration * 1000).easing(
                TWEEN.Easing[easingParts[0]][easingParts[1]]
            ).onUpdate(function () {

                var i=self.entities.length;
                while(i--) {
                    var item = self.entities[i];
                    if (item.entity.getParent()) {
                        var scale = item.entity.getLocalScale().copy(item.scale);
                        scale.x *= this.x;
                        scale.y *= this.y
                        scale.z *= this.z;
                        item.entity.setLocalScale(scale);
                    } else {
                        self.entities.splice(i,1);
                    }
                }
            }).onComplete(function () {
                self.startTween(to, from);
            }).start();
        }
    };

    return Batch_tween_scale;
});