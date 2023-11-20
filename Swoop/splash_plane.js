pc.script.attribute('rollSpeed', 'number', 10);
pc.script.attribute('rollAcceleration', 'number', 7);
pc.script.attribute('maxRoll', 'number', 2);
pc.script.attribute('panAmount', 'number', 0.1);

pc.script.create('splash_plane', function (context) {
    var euler = new pc.Vec3();

    var Splash_plane = function (entity) {
        this.entity = entity;
    };

    Splash_plane.prototype = {
        initialize: function () {
            this.roll = 0;
            this.rollVel = 0;
            this.rollAcc = this.rollAcceleration;
            this.pan = this.entity.getLocalPosition().x;
            this.gameCamera = context.root.findByName('Camera');
        },

        onEnable: function () {
            this.gameCamera.enabled = false;
        },

        onDisable: function () {
            this.gameCamera.enabled = true;
        },

        update: function (dt) {
            this.rollVel = pc.math.clamp(this.rollVel + this.rollAcc * dt, -this.rollSpeed, this.rollSpeed);

            this.roll += this.rollVel * dt;
            if (this.roll > this.maxRoll && this.rollAcc > 0) {                
                this.rollAcc = -this.rollAcceleration;
            }
            else if (this.roll < -this.maxRoll && this.rollAcc < 0) {
                this.rollAcc = this.rollAcceleration;
            }

            var localRotation = this.entity.getLocalRotation();
            localRotation.getEulerAngles(euler);
            euler.z = this.roll;
            localRotation.setFromEulerAngles(euler.x, euler.y, euler.z);
            this.entity.setLocalRotation(localRotation);

            var localPos = this.entity.getLocalPosition();
            localPos.x = this.pan - this.roll * this.panAmount;
            this.entity.setLocalPosition(localPos);
        }
    };

    return Splash_plane;
});