pc.script.attribute('lifetime', 'number', 0.5);

// Distance limits up the node's y axis between which
// the ribbon is generated
pc.script.attribute('xoffset', 'number', -0.8);
pc.script.attribute('yoffset', 'number', 1);
pc.script.attribute('height', 'number', 0.4);

pc.script.create('ribbon', function (context) {
    var MAX_VERTICES = 600;
    var VERTEX_SIZE = 4;
    
    var Ribbon = function (entity) {
        this.entity = entity;
        
        this.timer = 0;

        // The node generating this ribbon
        this.node = null;
        // The generated ribbon vertices
        this.vertices = [];

        // Vertex array to receive ribbon vertices
        this.vertexData = new Float32Array(MAX_VERTICES * VERTEX_SIZE);

        this.model = null;
    };

    Ribbon.prototype = {
        initialize: function () {
            var shaderDefinition = {
                attributes: {
                    aPositionAge: pc.gfx.SEMANTIC_POSITION
                },
                vshader: [
                    "attribute vec4 aPositionAge;",
                    "",
                    "uniform mat4 matrix_viewProjection;",
                    "uniform float trail_time;",
                    "",
                    "varying float vAge;",
                    "",
                    "void main(void)",
                    "{",
                    "    vAge = trail_time - aPositionAge.w;",
                    "    gl_Position = matrix_viewProjection * vec4(aPositionAge.xyz, 1.0);",
                    "}"
                ].join("\n"),
                fshader: [
                    "precision mediump float;",
                    "",
                    "varying float vAge;",
                    "",
                    "uniform float trail_lifetime;",
                    "",
                    "vec3 rainbow(float x)",
                    "{",
                            "float level = floor(x * 6.0);",
                            "float r = float(level <= 2.0) + float(level > 4.0) * 0.5;",
                            "float g = max(1.0 - abs(level - 2.0) * 0.5, 0.0);",
                            "float b = (1.0 - (level - 4.0) * 0.5) * float(level >= 4.0);",
                            "return vec3(r, g, b);",
                    "}",
                    "void main(void)",
                    "{",
                    "    gl_FragColor = vec4(rainbow(vAge / trail_lifetime), (1.0 - (vAge / trail_lifetime)) * 0.5);",
                    "}"
                ].join("\n")
            };

            var shader = new pc.gfx.Shader(context.graphicsDevice, shaderDefinition);

            var material = new pc.scene.Material();
            material.setShader(shader);
            material.setParameter('trail_time', 0);
            material.setParameter('trail_lifetime', this.lifetime);
            material.cull = false;
            material.blend = true;
            material.blendSrc = pc.gfx.BLENDMODE_SRC_ALPHA;
            material.blendDst = pc.gfx.BLENDMODE_ONE_MINUS_SRC_ALPHA;
            material.blendEquation = pc.gfx.BLENDEQUATION_ADD;
            material.depthWrite = false;

            // Create the vertex format
            var vertexFormat = new pc.gfx.VertexFormat(context.graphicsDevice, [
                { semantic: pc.gfx.SEMANTIC_POSITION, components: 4, type: pc.gfx.ELEMENTTYPE_FLOAT32 }
            ]);

            // Create a vertex buffer
            var vertexBuffer = new pc.gfx.VertexBuffer(context.graphicsDevice, vertexFormat, MAX_VERTICES, pc.gfx.USAGE_DYNAMIC);
            
            var mesh = new pc.scene.Mesh();
            mesh.vertexBuffer = vertexBuffer;
            mesh.indexBuffer[0] = null;
            mesh.primitive[0].type = pc.gfx.PRIMITIVE_TRISTRIP;
            mesh.primitive[0].base = 0;
            mesh.primitive[0].count = 0;
            mesh.primitive[0].indexed = false;

            var node = new pc.scene.GraphNode();

            var meshInstance = new pc.scene.MeshInstance(node, mesh, material);
            meshInstance.layer = pc.scene.LAYER_WORLD;
            meshInstance.updateKey();
            
            this.model = new pc.scene.Model();
            this.model.graph = node;
            this.model.meshInstances.push(meshInstance);

            this.setNode(this.entity);
        },

        reset: function () {
            this.timer = 0;
            this.vertices = [];
        },
        
        spawn: function () {
            var node = this.node;
            var pos = node.getPosition();
            var yaxis = node.up.clone().scale(this.height);

            var s = this.xoffset;
            var e = this.yoffset;
            this.vertices.unshift({
                spawnTime: this.timer,
                vertexPair: [
                    pos.x + yaxis.x * s, pos.y + yaxis.y * s, pos.z + yaxis.z * s, 
                    pos.x + yaxis.x * e, pos.y + yaxis.y * e, pos.z + yaxis.z * e
                ]
            });
        },
        
        clearOld: function () {
            for (var i = this.vertices.length - 1; i >= 0; i--) {
                var vp = this.vertices[i];
                if (this.timer - vp.spawnTime >= this.lifetime) {
                    this.vertices.pop();
                } else {
                    return;
                }
            }
        },
        
        copyToArrayBuffer: function () {
            for (var i = 0; i < this.vertices.length; i++) {
                var vp = this.vertices[i];
                
                this.vertexData[i * 8 + 0] = vp.vertexPair[0];
                this.vertexData[i * 8 + 1] = vp.vertexPair[1];
                this.vertexData[i * 8 + 2] = vp.vertexPair[2];
                this.vertexData[i * 8 + 3] = vp.spawnTime;

                this.vertexData[i * 8 + 4] = vp.vertexPair[3];
                this.vertexData[i * 8 + 5] = vp.vertexPair[4];
                this.vertexData[i * 8 + 6] = vp.vertexPair[5];
                this.vertexData[i * 8 + 7] = vp.spawnTime;
            }
        },
        
        updateNumActive: function () {
            this.model.meshInstances[0].mesh.primitive[0].count = this.vertices.length * 2;
        },

        update: function (dt) {
            this.timer += dt;
            var material = this.model.meshInstances[0].material;
            material.setParameter('trail_time', this.timer);

            this.clearOld();
            this.spawn();

            if (this.vertices.length > 1) {
                this.copyToArrayBuffer();
                this.updateNumActive();
                
                var vertexBuffer = this.model.meshInstances[0].mesh.vertexBuffer;
                var vertices = new Float32Array(vertexBuffer.lock());
                vertices.set(this.vertexData);
                vertexBuffer.unlock();
                
                if (!context.scene.containsModel(this.model)) {
                    context.scene.addModel(this.model);
                }
            } else {
                if (context.scene.containsModel(this.model)) {
                    context.scene.removeModel(this.model);
                }
            }
        },

        setNode: function (node) {
            this.node = node;
        } 
    };

    return Ribbon;
});