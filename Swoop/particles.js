pc.script.create('particles', function (context) {
    var Particles = function (entity) {
        this.entity = entity;
        this.index = 0;
    };

    Particles.prototype = {
        initialize: function () {
            this.effects = {};
            var children = this.entity.getChildren();
            for (var i=0; i<children.length; i++) {
                var child = children[i];
                if (!this.effects[child.getName()]) {
                    this.effects[child.getName()] = {
                        entities: [],
                        index: 0
                    };
                }

                this.effects[child.getName()].entities.push(child);
                child.enabled = false;
            }
        },

        spawn: function (name, position) {
            var effects = this.effects[name];
            if (effects) {
                var entity = effects.entities[effects.index];
                entity.setPosition(position);
                entity.enabled = true;
                entity.script.particle_emitter.resetEffect();
                effects.index = (effects.index + 1) % effects.entities.length;
            }
            
        }
    };

    return Particles;
});