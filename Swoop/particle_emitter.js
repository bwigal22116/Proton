pc.script.attribute('numParticles', 'number', 1);
pc.script.attribute('timeRange', 'number', 9999999);
pc.script.attribute('lifeTime', 'number', 1);
pc.script.attribute('lifeTimeRange', 'number', 0);
pc.script.attribute('startSize', 'number', 1);
pc.script.attribute('startSizeRange', 'number', 0);
pc.script.attribute('endSize', 'number', 1);
pc.script.attribute('endSizeRange', 'number', 0);
pc.script.attribute('position', 'vector');
pc.script.attribute('positionRange', 'vector');
pc.script.attribute('velocity', 'vector');
pc.script.attribute('velocityRange', 'vector');
pc.script.attribute('acceleration', 'vector');
pc.script.attribute('accelerationRange', 'vector');
pc.script.attribute('worldVelocity', 'vector');
pc.script.attribute('worldAcceleration', 'vector');
pc.script.attribute('spinStart', 'number', 0);
pc.script.attribute('spinStartRange', 'number', 0);
pc.script.attribute('spinSpeed', 'number', 0);
pc.script.attribute('spinSpeedRange', 'number', 0);
pc.script.attribute('billboard', 'boolean', true);
pc.script.attribute('dynamic', 'boolean', false);
pc.script.attribute('oneOff', 'boolean', false);

pc.script.attribute('colorRamp1', 'rgba', [1,1,1,1]);
pc.script.attribute('colorRamp2', 'rgba', [1,1,1,1]);
pc.script.attribute('colorRamp3', 'rgba', [1,1,1,1]);
pc.script.attribute('colorRamp4', 'rgba', [1,1,1,1]);
pc.script.attribute('colorRamp5', 'rgba', [1,1,1,1]);

pc.script.attribute('colorMap', 'asset', [], {
    type: 'texture', 
    max: 1
});

pc.script.attribute('opacityMap', 'asset', [], {
    type: 'texture', 
    max: 1
});

pc.script.create('particle_emitter', function (context) {
    var Particle_emitter = function (entity) {
        this.entity = entity;
        this.oneOff = true;
    };

    Particle_emitter.prototype = {
        initialize: function () {
            this.reset();            
        },

        resetEffect: function () {
            this.timer = this.timeRange;
            if (this.emitter) {
                this.emitter.time = 0;
            }
        },

        reset: function () {
            this.resetEffect();

            if (this.particleSystem) {
                context.scene.removeModel(this.particleSystem);
            }

            this.emitter = new pc.scene.ParticleEmitter(context.graphicsDevice, {
                numParticles: this.numParticles,
                timeRange: this.timeRange,
                lifeTime: this.lifeTime,
                lifeTimeRange: this.lifeTimeRange,
                startSize: this.startSize,
                startSizeRange: this.startSizeRange,
                endSize: this.endSize,
                endSizeRange: this.endSizeRange,
                spinStart: this.spinStart,
                spinStartRange: this.spinStartRange,
                spinSpeed: this.spinSpeed,
                spinSpeedRange: this.spinSpeedRange,
                billboard: this.billboard,
                dynamic: this.dynamic,
                position: new pc.Vec3(this.position[0], this.position[1], this.position[2]),
                positionRange: new pc.Vec3(this.positionRange[0], this.positionRange[1], this.positionRange[2]),
                velocity: new pc.Vec3(this.velocity[0], this.velocity[1], this.velocity[2]),
                velocityRange: new pc.Vec3(this.velocityRange[0], this.velocityRange[1], this.velocityRange[2]),
                acceleration: new pc.Vec3(this.acceleration[0], this.acceleration[1], this.acceleration[2]),
                accelerationRange: new pc.Vec3(this.accelerationRange[0], this.accelerationRange[1], this.accelerationRange[2]),
                worldVelocity: new pc.Vec3(this.worldVelocity[0], this.worldVelocity[1], this.worldVelocity[2]),
                worldAcceleration: new pc.Vec3(this.worldAcceleration[0], this.worldAcceleration[1], this.worldAcceleration[2]),
            });

            this.emitter.meshInstance.node = this.entity;
                                
            ramp = [
                this.colorRamp1.r, this.colorRamp1.g, this.colorRamp1.b, this.colorRamp1.a,
                this.colorRamp2.r, this.colorRamp2.g, this.colorRamp2.b, this.colorRamp2.a,
                this.colorRamp3.r, this.colorRamp3.g, this.colorRamp3.b, this.colorRamp3.a,
                this.colorRamp4.r, this.colorRamp4.g, this.colorRamp4.b, this.colorRamp4.a,
                this.colorRamp5.r, this.colorRamp5.g, this.colorRamp5.b, this.colorRamp5.a,
            ];

            this.emitter.setColorRamp(ramp);

            this.particleSystem = new pc.scene.Model();
            this.particleSystem.graph = this.entity;
            this.particleSystem.meshInstances = [ this.emitter.meshInstance ];

            var assets = [];
            if (this.colorMap) {
                assets.push(context.assets.getAssetByResourceId(this.colorMap));
            }

            if (this.opacityMap) {
                assets.push(context.assets.getAssetByResourceId(this.opacityMap));
            }

            context.assets.load(assets).then(function (resources) {
                if (this.colorMap) {
                    this.emitter.setColorMap(resources[0]);
                }

                if (this.opacityMap) {
                    if (this.colorMap) {
                        this.emitter.setOpacityMap(resources[1]);
                    } else {
                        this.emitter.setOpacityMap(resources[0]);
                    }
                }
            }.bind(this));
        },

        onAttributeChanged: function (name, oldValue, newValue) {
            if (this.refreshTimeout) {
                clearTimeout(this.refreshTimeout);
            }

            this.refreshTimeout = setTimeout (function () {
                this.reset();
                if (this.entity.enabled) {
                    this.onEnable();
                }
            }.bind(this), 1000);            
        },

        update: function (dt) {
            this.emitter.addTime(dt);

            if (this.oneOff) {
                this.timer -= dt;
                if (this.timer <= 0) {
                    this.timer = this.timeRange;
                    this.entity.enabled = false;
                }
            }
        },

        onEnable: function () {
            if (this.particleSystem)  {
                context.scene.addModel(this.particleSystem);
            }
        },

        onDisable: function () {
            if (this.particleSystem) {
                this.emitter.time = 0;
                context.scene.removeModel(this.particleSystem);
            }
        }
    };

    return Particle_emitter;
});