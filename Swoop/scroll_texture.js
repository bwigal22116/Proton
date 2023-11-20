pc.script.attribute('textureProperty', 'string', 'diffuse');
pc.script.attribute('speedU', 'number', 0);
pc.script.attribute('speedV', 'number', 0);

pc.script.create('scroll_texture', function (context) {
    var Scroll_texture = function (entity) {
        this.entity = entity;    
        this.textureProperties = null;
        this.materials = null;
    };

    Scroll_texture.prototype = {
        initialize: function () {
            this.textureProperties = this.textureProperty.split('|').map(function (p) {
                return p + 'MapOffset';
            });

            this.materials = [];
            if (this.entity.model) {
                if (this.entity.model.material) {
                    this.materials.push(this.entity.model.material);
                }

                this.entity.model.model.meshInstances.forEach(function (instance) {
                    if (this.materials.indexOf(instance.material) < 0) {
                        this.materials.push(instance.material);
                    }
                }.bind(this));
            }
        },

        update: function (dt) {
            for (var i=0, imax=this.materials.length; i<imax; i++) {
                var material = this.materials[i];

                for (var j=0, jmax=this.textureProperties.length; j<jmax; j++) {
                    var property = this.textureProperties[j];
                    var value = material[property];
                    value.x += dt * this.speedU;
                    value.y += dt * this.speedV;
                };

                material.update();
            }
        },

        onAttributesChanged: function (name, oldValue, newValue) {
            this.initialize();
        }
    };

   return Scroll_texture;
});