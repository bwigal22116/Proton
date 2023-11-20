pc.script.attribute("distance", "number", 7);
pc.script.attribute("lead", "number", 7);
pc.script.attribute('up', 'number', 0)
pc.script.attribute('zoomFactor', 'number', 0.4);
pc.script.attribute('zoomHeight', 'number', 20);
pc.script.attribute('minZoom', 'number', -15);
pc.script.attribute('maxZoom', 'number', 10);

pc.script.create('camera', function (context) {
    var dir = new pc.Vec3();
    var zoom = new pc.Vec3();
    var forward = new pc.Vec3();
    var desiredPosition = new pc.Vec3();
    var lastTargetPosition = new pc.Vec3();

    var MODE_FOLLOW = 0;
    var MODE_FOLLOW_TOP = 1;
    var MODE_NOFOLLOW_FAR = 2;
    var MODE_NOFOLLOW = 3;
    var MODE_GAMEOVER = 4;
    
    // Creates a new Camera instance
    var Camera = function (entity) {
        this.entity = entity;
        this.origin = new pc.Vec3(0,0,0);
    };

    Camera.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.game = context.root.findByName('Game').script.game;
            this.shaker = this.entity.script.shake;

            this.reset();
            this.game.on('reset', this.reset, this);
            this.game.on('gameover', this.gameover, this);
            this.game.on('collision', this.onCollision, this);
            this.game.on('fuelout', this.onCollision, this);
        },

        reset: function () {
            this.distanceOffset = 0;
            this.minCameraHeight = -100;
            this.mode = MODE_FOLLOW;
        },

        gameover: function () {
            this.mode = MODE_GAMEOVER;
        },

        onCollision: function () {
            this.shaker.shake(5, 1);
        },

        // Called every frame, dt is time in seconds since last update
        postUpdate: function (dt) {
            if (context.keyboard.wasPressed(pc.input.KEY_T)) {
                this.mode = (this.mode + 1)%4;
                this.origin.y = this.mode === 1 ? -150 : 0;
            }

            if (this.mode === MODE_NOFOLLOW_FAR) {
                this.entity.setPosition(200, 30, 0);
                this.entity.lookAt(this.origin);
            } else {

                if (this.mode === MODE_FOLLOW || this.mode === MODE_FOLLOW_TOP || this.mode === MODE_GAMEOVER) {

                    if (this.mode !== MODE_GAMEOVER || this.entity.getPosition().y > 5) {
                        var player = this.game.player.entity;

                        var lead = this.lead;
                        var up = this.up;
                        var playerPos = player.getPosition();

                        dir.sub2(playerPos, this.origin).normalize();
                        zoom.copy(dir).scale(this.distance + this.distanceOffset);
                        forward.cross(pc.Vec3.UP, dir).scale(lead + this.distanceOffset);
                        lastTargetPosition.copy(playerPos).add(zoom).add(forward);
                        lastTargetPosition.y += up;
                    }
                }

                desiredPosition.copy(lastTargetPosition);

                var shake = this.shaker.getShake(dt);
                desiredPosition.add(shake);

                this.entity.setPosition(desiredPosition);

                if (desiredPosition.sub(this.origin).lengthSq() > 0.01) {
                    this.entity.lookAt(this.origin);
                }
            }
        }
    };

    return Camera;
});