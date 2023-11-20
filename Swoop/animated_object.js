pc.script.attribute('collectibleName', 'string');
pc.script.attribute('numCollectibles', 'number');
pc.script.attribute('animationName', 'string');
pc.script.attribute('fuel', 'number', 20);

pc.script.create('animated_object', function (context) {
    var Animated_object = function (entity) {
        this.entity = entity;
    };

    Animated_object.prototype = {
        initialize: function () {
            this.game = context.root.findByName('Game').script.game;
            this.game.on('reset', this.reset, this);
            this.game.on('pickup', this.onPickup, this);

            this.reset();
        },

        reset: function () {
            this.collectiblesPicked = 0; 
        },

        onPickup: function (collectible) {
            if (collectible.entity.getName() === this.collectibleName) {
                this.collectiblesPicked++;
                if (this.collectiblesPicked >= this.numCollectibles) {
                    this.collectiblesPicked = 0;
                    this.entity.animation.play(this.animationName);

                    // reward the player with some fuel
                    this.game.setFuel(this.game.fuel + this.fuel);
                }
            }
        }
    };

    return Animated_object;
});