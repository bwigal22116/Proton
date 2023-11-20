pc.script.attribute('points', 'number', 10);
pc.script.attribute('fuel', 'number', 0);
pc.script.attribute('radius', 'number', 2.5);
pc.script.attribute('correctPosition', 'boolean', false);
pc.script.attribute('regenerate', 'boolean', true);
pc.script.attribute('triggerBonusMode', 'boolean', false);
pc.script.attribute('isMegaGem', 'boolean', false);
pc.script.attribute('isHeal', 'boolean', false);
pc.script.attribute('isStreak', 'boolean', false);
pc.script.attribute('effectName', 'string');

pc.script.create('collectible', function (context) {
    var temp = new pc.Vec3();
    var game = null;

    var Collectible = function (entity) {
        this.entity = entity;
    };

    Collectible.prototype = {
        initialize: function () {
            if (!game) {
                game = context.root.findByName('Game').script.game;
            }
            if (this.regenerate) {
                game.on('reset', this.reset, this);
            } 

            if (this.correctPosition) {
                var pos = this.entity.getPosition();
                game.clampToRadius(pos);
                this.entity.setPosition(pos);
            }
        },

        reset: function () {
            this.entity.enabled = true;
        },

        onEnable: function () {
            if (this.regenerate) {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    this.timeout = null;
                }
            }
            
            game.physics.addCollider(this);
        },

        containsPlayer: function (player) {
            var obb = player.obb;
            return game.physics.testSphereObb(this.entity.getPosition(), this.radius, obb);
        },

        onContact: function () {
            this.entity.enabled = false;
            game.fire('pickup', this);

            if (this.regenerate) {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                }

                this.timeout = setTimeout(this.reset.bind(this), 30000);
            }
        }
    };

    return Collectible;
});