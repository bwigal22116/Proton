pc.script.create('bonus_effect', function (context) {
        
    var Bonus_effect = function (entity) {
        this.entity = entity;    
    };

    Bonus_effect.prototype = {
        initialize: function () {
            var game = context.root.findByName('Game').script.game;
            game.on('pause', this.pause, this);
            game.on('unpause', this.unpause, this);

            this.scrollTextures = this.entity.getChildren().filter(function(child) {
                return child.script && child.script.scroll_texture;
            }).map(function (child) {
                return child.script;
            });

            this.entity.setPosition(0, 0, 0);
        },

        pause: function () {
            if (this.entity.enabled) {
                this.scrollTextures.forEach(function (scroll) {
                    scroll.enabled = false;
                });
            }
        },

        unpause: function () {
            if (this.entity.enabled) {
                this.scrollTextures.forEach(function (scroll) {
                    scroll.enabled = true;
                });
            }
        }
    };

   return Bonus_effect;
});