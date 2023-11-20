pc.script.attribute('numSkipFrames', 'number', 3);

pc.script.create('physics', function (context) {
    var playerTip = new pc.Vec3();
    var playerTail = new pc.Vec3();

    var v1 = new pc.Vec3();
    var center = new pc.Vec3();
    var axis = new pc.Vec3();
    var result = new pc.Vec3();

    // Creates a new Rotator instance
    var Physics = function (entity) {
        this.entity = entity;
        this.colliders = [];
        this.frames = 0;
    };

    Physics.prototype = {
        initialize: function () {
            this.initialSkipFrames = this.numSkipFrames;

            this.game = context.root.findByName('Game').script.game;
            this.game.on('startbonus', this.onStartBonusMode, this);
            this.game.on('stopbonus', this.onStopBonusMode, this);
            this.game.on('reset', this.onStopBonusMode, this);
        },

        onStartBonusMode: function () {
            this.numSkipFrames = 0;
        },

        onStopBonusMode: function () {
            this.numSkipFrames = this.initialSkipFrames;
        },

        addCollider: function (collider) {
            this.colliders.push(collider);
        },

        /**
         * Given the point, set the result to a point on (
         * or in) the specified OBB, closest to the point
         */
        closestPointObb: function (point, obb, result) {
            obb.transform.getTranslation(center);
            v1.copy(point).sub(center);

            // Start result at center of box; make steps from there
            result.copy(center);

            // process x axis
            var dist = v1.dot(obb.transform.getX(axis));
            if (dist > obb.halfExtents.x) {
                dist = obb.halfExtents.x;
            }
            if (dist < -obb.halfExtents.x) {
                dist = -obb.halfExtents.x;
            }

            axis.scale(dist);
            result.add(axis);

            // process y axis
            dist = v1.dot(obb.transform.getY(axis));
            if (dist > obb.halfExtents.y) {
                dist = obb.halfExtents.y;
            }
            if (dist < -obb.halfExtents.y) {
                dist = -obb.halfExtents.y;
            }

            axis.scale(dist);
            result.add(axis);

            // process z axis
            dist = v1.dot(obb.transform.getZ(axis).scale(-1));
            if (dist > obb.halfExtents.z) {
                dist = obb.halfExtents.z;
            }
            if (dist < -obb.halfExtents.z) {
                dist = -obb.halfExtents.z;
            }

            axis.scale(dist);
            result.add(axis);

            return result;
        },

        /**
         * Test if the sphere with the specified
         * center and radius intersects with the specified
         * OBB
         */
        testSphereObb: function (center, radius, obb) {
            this.closestPointObb(center, obb, result);
            result.sub(center);
            return result.dot(result) <= radius * radius;
        },

        update: function (dt) {
            if (this.game.paused || this.game.isOver) {
                return;
            }
            
            this.frames++;
            if (this.frames < this.numSkipFrames) {
                return;
            } else {
                this.frames = 0;
            }

            var player = this.game.player;

            var i = this.colliders.length;
            while(i--) {
                var collider = this.colliders[i];
                if (!collider.entity.getParent()) {
                    this.colliders.splice(i, 1);
                    continue;
                }

                if (collider.entity.enabled && collider.containsPlayer(player)) {
                    collider.onContact();
                    break;
                }
            }
        }
    };

    return Physics;
});