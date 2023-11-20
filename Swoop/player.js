pc.script.attribute('maxHeight', 'number', 80);
pc.script.attribute('minHeight', 'number', -5);
pc.script.attribute('minSpeed', 'number', 10);
pc.script.attribute('maxSpeed', 'number', 20);
pc.script.attribute('fallAcceleration', 'number', 10);
pc.script.attribute('minDecelerationFactor', 'number', -0.1);
pc.script.attribute('maxDecelerationFactor', 'number', -0.5);
pc.script.attribute('bonusSpeedModifier', 'number', 2);
pc.script.attribute('tiltForce', 'number', 500);
pc.script.attribute('tiltForceModifierWhenNoFuel', 'number', 0.4);
pc.script.attribute('tiltDamping', 'number', 2.5);
pc.script.attribute('gravity', 'number', -200);
pc.script.attribute('loopModifier', 'number', 0.5);
pc.script.attribute('deathVelocity', 'number', 30);
pc.script.attribute('deathGravity', 'number', -80);
pc.script.attribute('bodySize', 'number', 6);

pc.script.create('player', function (context) {    

    var velocity = new pc.Vec3();
    var vector = new pc.Vec3();
    var cross = new pc.Vec3();
    var quat = new pc.Quat();
    var mat = new pc.Mat4();
    var torque = new pc.Vec3();

    var Player = function (entity) {
        this.entity = entity;
    };

    Player.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.game = context.root.findByName('Game').script.game;
            this.game.on('reset', this.reset, this);
            this.game.on('gameover', this.gameover, this);
            this.game.on('startbonus', this.onBonusStart, this);
            this.game.on('stopbonus', this.onBonusStop, this);
            this.game.on('fuelok', this.onFuelOk, this);
            this.game.on('fuellow', this.onFuelLow, this);
            this.game.on('fuelout', this.onFuelOut, this);
            this.game.on('fuelrecovery', this.onFuelRecovery, this);
            this.game.on('splashscreen', this.onSplashScreen, this);
            this.game.on('startgame', this.onStartGame, this);

            this.model = this.entity.findByName("biplane");

            this.initialPosition = this.entity.getPosition().clone();
            
            velocity = new pc.Vec3();

            this.obb = new pc.shape.Box(this.entity.getWorldTransform(), new pc.Vec3(3, 0.5, 0.5))

            this.smokeEmitter = this.entity.findByName('Smoke');
            this.fireEmitter = this.entity.findByName('Fire');

            this.reset();
        },

        reset: function () {
            velocity.set(0,0,0);
            this.fly = false;
            this.tooHigh = false;
            this.tooLow = false;
            this.tilt = 0;
            this.tiltVelocity = 0;
            this.speed = this.minSpeed;
            this.playDeathAnimation = false;
            this.outOfFuel = false;

            if (this.isRolling) {
                var euler = this.model.getLocalEulerAngles();
                euler.z = this.initialRollAngle;
                this.model.setLocalEulerAngles(euler); 
            }

            this.isRolling = false;

            this.entity.setPosition(this.initialPosition);

            this.stopSmoke();
            this.stopFire();

            // look at initial direction
            this.correctLookAt();
        },

        correctLookAt: function () {
            vector.copy(this.entity.getPosition());
            vector.y = 0;
            vector.normalize().scale(-1);
            vector.cross(vector, pc.Vec3.UP).add(this.entity.getPosition());
            this.entity.lookAt(vector, pc.Vec3.UP);
        },

        getTipPosition: function (result) {
            result.copy(this.entity.forward).scale(this.bodySize * 0.5).add(this.entity.getPosition());
        },

        gameover: function () {
            this.stopFlying();
            this.startFire();
            this.playDeathAnimation = true;
            velocity.set(0, this.deathVelocity, 0);
            this.gravityModifier = 1;
        },

        startFlying: function () {
            this.fly = true;
        },

        stopFlying: function () {
            this.fly = false;
        },

        startSmoke: function () {
            this.smokeEmitter.enabled = true;
        },

        stopSmoke: function () {
            this.smokeEmitter.enabled = false;
        },

        startFire: function () {
            this.fireEmitter.enabled = true;
        },

        stopFire: function () {
            this.fireEmitter.enabled = false;
        },

        update: function (dt) {
            if (this.game.paused) {
                return;
            }

            if (!this.playDeathAnimation) {
                this.updateTilt(dt);  
                this.updateSpeed(dt);
                this.updatePosition(dt);
                this.updateRoll(dt);
            } else {
                this.updateDeathAnimation(dt);
                this.updateTilt(dt);
            }
                                
        },

        canFly: function () {
            if (this.tooHigh) {
                return false;
            }

            return this.fly || this.tooLow;
        },

        updateTilt: function (dt) {
            var position = this.entity.getPosition();
            this.tooHigh = (position.y >= this.maxHeight);
            this.tooLow = position.y <= this.minHeight && this.game.inBonusMode;

            // add gravity torque
            torque.set(0, this.gravity, 0);
            // add user torque 

            if (this.canFly()) {
                var force = this.tiltForce;
                if (this.outOfFuel) {
                    force *= this.tiltForceModifierWhenNoFuel;
                }
                vector.copy(this.entity.up).scale(force);
                torque.add(vector);
            }

            // find torque amount and torque sign
            var torqeAmount = torque.length();
            torque.cross(this.entity.forward, torque).normalize();

            // get the position of the player normalized to form the radius of the
            // circular level
            vector.copy(position);
            vector.y = 0;
            vector.normalize();


            var dot = this.entity.up.dot(pc.Vec3.UP); // plane heading left or right
            var dot2 = this.entity.forward.dot(pc.Vec3.UP); // plane heading up or down?

            var damping = this.tiltDamping;
            if (dot2 > 0 || !this.fly) {
                var damping = this.tiltDamping + (8 * (1 - Math.abs(dot)));
            }          

            // apply torque in the correct direction
            if (torque.dot(vector) < 0) {
                this.tiltVelocity -= (torqeAmount + damping * this.tiltVelocity) * dt;
            } else {
                this.tiltVelocity += (torqeAmount - damping * this.tiltVelocity) * dt;
            }

            this.tilt += this.tiltVelocity * dt;

            // clamp tilt between -180 and 180
            if (this.tilt < -180) {
                this.tilt += 360;
            } else if (this.tilt > 180) {
                this.tilt -= 360;
            }

            // get the forward vector of the player and rotate it by this.tilt
            cross.cross(pc.Vec3.UP, vector);
            quat.setFromAxisAngle(vector, this.tilt);
            quat.transformVector(cross, cross);
            cross.add(position);

            // rotate the up vector of the entity as well before calling look at
            quat.transformVector(pc.Vec3.UP, vector);
            this.entity.lookAt(cross, vector);
        },

        updateSpeed: function (dt) {
            // increase velocity when the player is falling
            var accelerationFactor = 0; 
            var adjustedTilt = 0;
            if (this.tilt < 0 && this.tilt > -180) {
                if (this.tilt < -90) {
                    adjustedTilt = -180 - this.tilt;
                } else {
                    adjustedTilt = this.tilt;
                }

                accelerationFactor = pc.math.lerp(0, 1, -adjustedTilt / 90);
            } else {
                if (this.tilt > 90) {
                    adjustedTilt = 180 - this.tilt;
                } else {
                    adjustedTilt = this.tilt;
                }

                accelerationFactor = pc.math.lerp(this.minDecelerationFactor, this.maxDecelerationFactor, adjustedTilt/90);
            }

            var minSpeed = this.game.inBonusMode ? this.bonusSpeedModifier * this.minSpeed : this.minSpeed;
            var maxSpeed = this.game.inBonusMode ? this.bonusSpeedModifier * this.maxSpeed : this.maxSpeed;
            this.speed = pc.math.clamp(this.speed + accelerationFactor * this.fallAcceleration * dt, minSpeed, maxSpeed);
        },

        updatePosition: function (dt) {
            // apply velocity towards entity.forward
            velocity.copy(this.entity.forward).scale(this.speed);

            vector.copy(velocity).scale(dt).add(this.entity.getPosition());
            this.game.clampToRadius(vector);

            this.entity.setPosition(vector);
        },

        updateDeathAnimation: function (dt) {
            // Oh noes plane is falling! 
            velocity.y += this.deathGravity * this.gravityModifier * dt;
            vector.copy(velocity).scale(dt).add(this.entity.getPosition());
            this.entity.setPosition(vector);    
        },

        updateRoll: function (dt) {
            if (this.isRolling) {
                this.rollTimer += dt;

                var rollAngle = this.easeInOutQuad(this.rollTimer, 0, 360, 1);
                if (this.rollTimer > 1) {
                    rollAngle = 0;
                    this.isRolling = false;
                }

                var euler = this.model.getLocalEulerAngles();
                euler.z = rollAngle + this.initialRollAngle;
                this.model.setLocalEulerAngles(euler);
            }
        },

        easeInOutQuad: function (t, b, c, d) {
            t /= d/2;
            if (t < 1) {
                return c/2*t*t + b;
            }

            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        },

        onBonusStart: function () {
            this.previousSpeed = this.speed;
            var pos = this.entity.getPosition();
            // remember previous position
            this.previousPosition = pos.clone();

            // instantly snap the player to the new radius
            this.game.clampToRadius(pos);
            pos.y = this.initialPosition.y;
            this.entity.setPosition(pos);

            this.tilt = 0;
            this.tiltVelocity = 0;

            this.correctLookAt();

            this.roll();
        },

        onBonusStop: function () {
            this.speed = this.previousSpeed;
            this.tilt = 0;
            this.tiltVelocity = 0;
            this.entity.setPosition(this.previousPosition);
            this.correctLookAt();

            this.roll();
        },

        onFuelLow: function () {
            this.startSmoke();
        },

        onFuelOk: function () {
            this.stopSmoke();
        },

        onFuelOut: function () {
            this.startFire();
            this.outOfFuel = true;
        },

        onFuelRecovery: function () {
            this.stopFire();
            this.outOfFuel = false;
        },

        onSplashScreen: function () {
            this.entity.enabled = false;
            this.stopSmoke();
            this.stopFire();
        },

        onStartGame: function () {
            this.entity.enabled = true;
            this.stopSmoke();
            this.stopFire();
        },

        roll: function () {
            if (!this.isRolling) {
                this.isRolling = true;
                this.initialRollAngle = this.model.getLocalEulerAngles().z;
                this.rollTimer = 0;
            }
        }
    };

    return Player;
});