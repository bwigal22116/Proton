pc.script.attribute('halfExtents', 'vector', [1,1,1]);
pc.script.attribute('destroyOnContact', 'boolean', true);

pc.script.create('obstacle', function (context) {
    var temp = new pc.Vec3();
    var pos = new pc.Vec3();
    var game = null;

    var Obstacle = function (entity) {
        this.entity = entity;
    };

    Obstacle.prototype = {
        initialize: function () {
            if (!game) {
                game = context.root.findByName('Game').script.game;
            }

            if (!this.destroyOnContact) {
                game.on('reset', this.onEnable, this);
            }

            this.box = new pc.shape.Box(
                this.entity.getWorldTransform(), 
                new pc.Vec3(this.halfExtents[0], this.halfExtents[1], this.halfExtents[2])
            );
        },

        onEnable: function () {
            game.physics.addCollider(this);
        },

        containsPlayer: function (player) {
            // just check the tip of the player instead of doing proper OBB-OBB test
            // for optimization
            player.getTipPosition(temp);
            return this.box.containsPoint(temp);
        },

        onContact: function () {
            game.onCollision(!this.destroyOnContact);
            if (this.destroyOnContact) {
                this.entity.enabled = false;
            }
        }
    };

    return Obstacle;
});