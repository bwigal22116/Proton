pc.script.attribute('spawnHeight', 'number', 15);
pc.script.attribute('cleanupDot', 'number', 0.5);
pc.script.attribute('minMagnetDistance', 'number', 5);
pc.script.attribute('magnetSpeed', 'number', 5);
pc.script.attribute('triggerBonusModePattern', 'string');

pc.script.create('patterns', function (context) {
    var position = new pc.Vec3();
    var mat = new pc.Mat4();
    var rot = new pc.Quat();
    var topLeft = new pc.Vec3();

    var Patterns = function (entity) {
        this.entity = entity;    
    };

    Patterns.prototype = {
        postInitialize: function () {
            var spawnables = context.root.findByName('Spawnables');
            this.spawnables = {};
            spawnables.getChildren().forEach(function (child) {
                this.spawnables[child.getName()] = child;
            }.bind(this));

            this.patterns = [];
            var patternsEntity = context.root.findByName('Patterns');
            patternsEntity.getChildren().forEach(function (pattern) {
                this.createPattern(pattern, 2);
            }.bind(this));

            this.patternThatTriggersBonusMode = null;
            for (var i=0, len=this.patterns.length; i<len; i++) {
                if (this.patterns[i].entity.getName() === this.triggerBonusModePattern) {
                    this.patternThatTriggersBonusMode = this.patterns[i];
                    break;
                }
            }

            this.createBonusPattern();

            this.blocks = [];
            this.normalizedPlayerPosition = new pc.Vec3();
            this.lastNormalizedPlayerPosition = new pc.Vec3();

            this.game = context.root.findByName('Game').script.game;
            this.game.on('reset', this.reset, this);
            this.game.on('bonusready', this.onBonusReady, this);
            this.game.on('startbonus', this.onStartBonusMode, this);
            this.game.on('stopbonus', this.onStopBonusMode, this);

            this.reset();
        },

        createPattern: function (parent, copies) {
            var i;
            var pattern = parent.script.pattern;
            pattern.prefabs = [];
            pattern.transforms = [];
            pattern.prefabIndex = 0;

            // get the original transform data from each child of 
            // a pattern because we will later change the position
            // of each spawned entity and we need the originals to 
            // calculate the correct new transforms
            parent.getChildren().forEach(function (child) {
                pattern.transforms.push({
                    localPosition: child.getLocalPosition().clone(),
                    localRotation: child.getLocalRotation().clone(),
                    localScale: child.getLocalScale().clone(),
                    magnetSpeed: 0
                });
            });

            // create copies of each pattern and add
            // it to the prefabs list. When we generate 
            // patterns we will just move one of these copies
            // to the appropriate position
            for (i=0; i<copies; i++) {
                var prefab = new pc.fw.Entity();

                parent.getChildren().forEach(function (child) {
                    var clone = this.getSpawnable(child.getName()).clone();
                    prefab.addChild(clone);
                    clone.setLocalPosition(child.getLocalPosition());
                    clone.setLocalRotation(child.getLocalRotation());
                    clone.setLocalScale(child.getLocalScale());
                    clone.enabled = false;
                }.bind(this));

                pattern.prefabs.push(prefab);

                context.root.addChild(prefab);

                prefab.enabled = false;
            }

            i = parent.getChildren().length;
            var children = parent.getChildren();
            while(i--) {
                children[i].destroy();
            }

            this.patterns.push(pattern);
        },

        getSpawnable: function (name) {
            return this.spawnables[name];
        },

        createBonusPattern: function () {
            var pattern = new pc.fw.Entity();
            context.root.addChild(pattern);
            
            var rows = 3;
            var cols = 8;
            var spacing = 6;
            var height = 10;
            var gem = this.getSpawnable('gem_F');
            for (var r=0; r<rows; r++) {
                for (var c=0; c<cols; c++) {
                    var x = c * spacing + pc.math.random(-0.5, 0.5);
                    var y = -height/2 + r * height/rows + pc.math.random(-0.2,0.2);

                    var clone = gem.clone();
                    pattern.addChild(clone);
                    clone.setLocalPosition(x, y, 0);
                }
            }

            context.systems.script.addComponent(pattern, {
                scripts: [{
                    url: 'pattern.js'
                }]
            });

            var interval = setInterval(function () {
                if (pattern.script.pattern) {
                    pattern.script.pattern.entry = 2;
                    pattern.script.pattern.exit = 2;
                    pattern.script.pattern.weight = 1000000;
                    pattern.script.pattern.spaceAfter = 6*spacing;
                    pattern.script.pattern.isBonusMode = true;
                    pattern.script.pattern.horizontalScale = 1;
                    pattern.script.pattern.difficulty = 1;

                    this.createPattern(pattern, 2);

                    clearInterval(interval);
                }
            }.bind(this), 0);
        },

        reset: function () {
            this.previousPattern = null;
            this.patternBlocksEnabled = true;
            this.inBonusMode = false;
            this.useTriggerBonusModePattern = false;

            this.getNormalizedPlayerPosition(this.normalizedPlayerPosition);
            this.lastNormalizedPlayerPosition.copy(this.normalizedPlayerPosition);

            this.angleTravelled = 0;
            this.angleToBeTravelledBeforeSpawn = 10;

            this.frame = 0;
            this.cleanupFrames = 10;

            this.disableSpawnedPatterns();

            this.patterns.forEach(function (pattern) {
                pattern.prefabIndex = 0;
            });
        },

        getNormalizedPlayerPosition: function (result, playerPosition) {
            if (!playerPosition) {
                playerPosition = this.game.player.entity.getPosition();
            }

            result.copy(playerPosition);
            result.y = 0;
            result.normalize();
        },

        disableSpawnedPatterns: function () {
            for (var i=0, imax=this.patterns.length; i<imax; i++) {
                var pattern = this.patterns[i];
                pattern.prefabIndex = 0;
                for (var j=0, jmax=pattern.prefabs.length; j<jmax; j++) {
                    var children = pattern.prefabs[j].getChildren();
                    for (var k=0, kmax=children.length; k<kmax; k++) {
                        var child = children[k];
                        child.enabled = false;
                    }
                }
            }
        },

        onBonusReady: function () {
            this.useTriggerBonusModePattern = true;
        },

        onStartBonusMode: function () {
            this.patternBlocksEnabled = false;
            this.inBonusMode = true;
            this.angleToBeTravelledBeforeSpawn = 0;
            this.disableSpawnedPatterns();
        },

        onStopBonusMode: function () {
            this.patternBlocksEnabled = true;
            this.inBonusMode = false;
            this.disableSpawnedPatterns();
        },
        
        getAngleToTravelIfPatternsBlocked: function (angle) {
            var i, len = this.blocks.length;
            for (i=0; i<len; i++) {
                var block = this.blocks[i];
                if (angle >= block.fromAngle && angle <= block.toAngle ||
                    angle >= block.toAngle && angle <= block.fromAngle) {
                    return Math.abs(block.fromAngle - block.toAngle);
                }
            }

            return 0;
        },

        findMatchingPattern: function (previousPattern) {
            if (this.useTriggerBonusModePattern) {
                return this.patternThatTriggersBonusMode;
            } else {
                var candidates = this.patterns.filter(function (pattern) {
                    if (this.inBonusMode && pattern.isBonusMode) {
                        return true;
                    } 

                    if (pattern.isBonusMode) {
                        return false;
                    }

                    if (pattern === this.patternThatTriggersBonusMode) {
                        return false;
                    }

                    if (previousPattern && previousPattern !== this.patternThatTriggersBonusMode) {
                        if (previousPattern.exit !== pattern.entry) {
                            return false;
                        }

                        if (previousPattern === pattern) {
                            return false;
                        }
                    }

                    if (pattern.difficulty !== this.game.difficulty) {
                        return false;
                    }

                    return true; 
                }.bind(this));

                var i; 
                var sumWeights = 0;
                var len = candidates.length;

                if (len === 0) {
                    console.error('Could not find any candidates');
                }

                for (i=0; i<len; i++) {
                    sumWeights += candidates[i].weight;
                }

                var selected = candidates[0];
                var random = Math.floor(pc.math.random(0, sumWeights));

                for (i=0; i<len; i++) {
                    random -= candidates[i].weight;
                    if (random <= 0) {
                        selected = candidates[i];
                        break;
                    }
                }

                return selected;
            }
        },

        getAngleFromChordLength: function (radius, length) {
            var x = length * length;
            var r = 2.0 * radius * radius;
            var cosAngle = (r-x) / r;
            return Math.acos(cosAngle) * pc.math.RAD_TO_DEG;
        },

        addBlock: function (block) {
            this.blocks.push({
                fromAngle: utils.positionToAngle(block.from),
                toAngle: utils.positionToAngle(block.to)
            });
        },

        update: function (dt) {
            var playerPos = this.game.player.entity.getPosition();
            this.getNormalizedPlayerPosition(this.normalizedPlayerPosition, playerPos);
            this.spawnNewPatternIfNeeded(dt, playerPos);

            // disable entities that are behind the player except when in bonus mode
            // for optimization, because bonus mode would constantly remove entities due
            // to the faster plane speed
            if (!this.inBonusMode) {
                this.frame++;
                if (this.frame > this.cleanupFrames) {
                    this.cleanUpEntitiesBehindPlayer();
                    this.frame = 0;
                }
            } else {
                this.magnetizeCollectibles(dt);
            }
        },

        spawnNewPatternIfNeeded: function (dt, playerPosition) {
            this.angleTravelled = Math.acos(this.normalizedPlayerPosition.dot(this.lastNormalizedPlayerPosition)) * pc.math.RAD_TO_DEG;

            // if the player has moved enough then spawn another pattern
            if (this.angleTravelled >= this.angleToBeTravelledBeforeSpawn) {
                this.angleTravelled = 0;
                this.lastNormalizedPlayerPosition.copy(this.normalizedPlayerPosition);

                this.calculateNewPatternPosition(playerPosition, topLeft);
                this.spawnPattern(topLeft);
            }
        },

        calculateNewPatternPosition: function (playerPosition, result) {
            result.cross(pc.Vec3.UP, this.normalizedPlayerPosition).scale(50).add(playerPosition); 
            if (!this.inBonusMode) {
                result.y = this.spawnHeight; 
            } else {
                result.y = this.spawnHeight + pc.math.random(-10, 10);
            }
            this.game.clampToRadius(result);
        },

        spawnPattern: function (topLeft) {
            var radius = this.game.getLevelRadius();
            var angle = utils.positionToAngle(topLeft.data);

            // if we are not allowed to spawn anything here then 
            // wait until we passed the blocked area
            if (this.patternBlocksEnabled) {
                var angleBlock = this.getAngleToTravelIfPatternsBlocked(angle);
                if (angleBlock > 0) {
                    return angleBlock;
                }
            }

            // find a good pattern
            pattern = this.findMatchingPattern(this.previousPattern);
            this.previousPattern = pattern;

            // reset the flag after we have picked the pattern to generate to go into bonus mode
            this.useTriggerBonusModePattern = false; 


            // spawn the pattern!
            var root = pattern.prefabs[pattern.prefabIndex];
            var children = root.getChildren();
            var maxChildren = children.length;
            var index;

            root.enabled = true;
            // go through all the children entities of the pattern
            // and enabled them - also put them at the right spot depending
            // on the radius of the level
            for (index=0; index<maxChildren; index++) {
                var child = children[index];

                child.enabled = true;
                child.magnetSpeed = 0;
                var localPosition = pattern.transforms[index].localPosition;
                var childAngle = this.getAngleFromChordLength(radius, localPosition.x * pattern.horizontalScale);
                mat.setFromEulerAngles(0, childAngle, 0);
                position.copy(topLeft);
                mat.transformPoint(position, position);
                this.game.clampToRadius(position);
                position.y += localPosition.y;

                child.setPosition(position);

                var localRotation = pattern.transforms[index].localRotation;
                rot.setFromEulerAngles(0, angle + childAngle, 0).mul(localRotation);
                child.setRotation(rot);
            }

            // advance the prefab index of the pattern - each pattern 
            // has a few copies of itself so next time we spawn it we will grab the next
            // copy
            pattern.prefabIndex = (pattern.prefabIndex + 1) % pattern.prefabs.length;

            // wait for the player to travel an angle equal to the width of the 
            // pattern before spawning another pattern
            this.angleToBeTravelledBeforeSpawn = this.getAngleFromChordLength(radius, pattern.width * pattern.horizontalScale + pattern.spaceAfter);
        },


        cleanUpEntitiesBehindPlayer: function () {
            for (var i=0, imax=this.patterns.length; i<imax; i++) {
                var pattern = this.patterns[i];
                for (var j=0, jmax=pattern.prefabs.length; j<jmax; j++) {
                    var children = pattern.prefabs[j].getChildren();
                    for (var k=0, kmax=children.length; k<kmax; k++) {
                        var child = children[k];
                        if (!child.enabled) {
                            continue;
                        }

                        position.copy(child.getPosition());
                        if (this.isPositionBehindPlayer(position)) {
                            child.enabled = false;
                        } 
                    }
                }
            }
        },

        isPositionBehindPlayer: function (pos) {
            pos.y = 0;
            pos.normalize();

            var dot = pos.dot(this.normalizedPlayerPosition);
            if (dot < this.cleanupDot) {
                var cross = pos.cross(this.normalizedPlayerPosition, pos);
                return cross.y < 0;
            }             

            return false;
        },

        magnetizeCollectibles: function (dt) {
            var playerPosition = this.game.player.entity.getPosition();
            var minDistanceSq = this.minMagnetDistance * this.minMagnetDistance;
            var magnetSpeed = this.magnetSpeed;

            // make the player a big magnet for bonus collectibles!
            for (var i=0, imax=this.patterns.length; i<imax; i++) {
                var pattern = this.patterns[i];
                if (pattern.isBonusMode) {
                    for (var j=0, jmax=pattern.prefabs.length; j<jmax; j++) {
                        var children = pattern.prefabs[j].getChildren();
                        for (var k=0, kmax=children.length; k<kmax; k++) {
                            var child = children[k];
                            if (!child.enabled) {
                                continue;
                            }

                            var childPosition = child.getPosition();
                            position.sub2(playerPosition, childPosition);
                            var lengthSq = position.lengthSq();
                            if (lengthSq < minDistanceSq) {
                                child.magnetSpeed += dt*magnetSpeed;
                                position.scale(child.magnetSpeed/Math.sqrt(lengthSq));
                                position.add(childPosition);
                                child.setPosition(position);
                            }
                        }
                    }
                }
            }
        }
    };

   return Patterns;
});