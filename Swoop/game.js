// Bonus mode
pc.script.attribute('bonusModeDuration', 'number', 20);

// Collectibles
pc.script.attribute('levelRadius', 'number', 160);
pc.script.attribute('bonusLevelRadius', 'number', 175);

// Gameplay
pc.script.attribute('fuelDecreaseRate', 'number', 2);
 // every time the difficulty increases this will be added to the fuelDecreaseRate
pc.script.attribute('fuelDifficultyModifier', 'number', 1);
pc.script.attribute('fuelLostOnHit', 'number', 30);
pc.script.attribute('maxDifficulty', 'number', 3);
pc.script.attribute('increaseDifficultyRate', 'number', 60);
pc.script.attribute('maxStreak', 'number', 5);
pc.script.attribute('streakBreakDuration', 'number', 2);
pc.script.attribute('numberOfCollectiblesPerStreak', 'number', 5);

pc.script.create('game', function (context) {
    var vector = new pc.Vec3();
    var temp = new pc.Vec3();

    // Creates a new Game instance
    var Game = function (entity) {
        this.entity = entity;
    };

    Game.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.player = context.root.findByName('Bird').script.player;
            this.environment = context.root.findByName('Environment');
            this.bonusEffect = context.root.findByName('BonusEffect');
            this.physics = this.entity.script.physics;
            this.input = this.entity.script.input;
            this.patterns = this.entity.script.patterns;
            this.particles = context.root.findByName('Particles').script.particles;
            this.storage = this.entity.script.storage;
            this.audio = context.root.findByName('Audio').script.audio;
            this.scaleTweener = this.entity.script.batch_tween_scale;
            this.splashEntities = context.root.findByName('SplashScreen');

            this.inBonusMode = false;
            this.readyForBonus = false;
            
            this.bonusEffect.enabled = false;

            this.minHeightPoints = [];

            this.on('pickup', this.onPickedCollectible, this);
            this.on('reset', this.reset, this);

            this.reset();
        },

        postInitialize: function () {
            this.splashScreen();
        },

        reset: function () {
            this.readyForBonus = false;
            this.startedBonus = false;
            this.isOver = false;
            this.speedModifier = 1;
            this.bonusTimer = 0;
            this.fuelLow = false;
            this.outOfFuel = false;
            this.streakTimer = this.streakBreakDuration;

            this.difficulty = 1;
            this.difficultyTimer = this.increaseDifficultyRate;

            this.setScore(0);
            this.setBonusMeter(0);
            this.setFuel(100);
            this.setStreak(1);

            this.stopBonusMode();
        }, 

        addMinHeightPoint: function (position) {
            this.minHeightPoints.push({
                angle: utils.positionToAngle(position.data),
                minHeight: position.y
            });

            this.minHeightPoints.sort(function (a, b) {
                return a.angle - b.angle;
            });
        },

        getMinHeightForPosition: function (position) {
            var angle = utils.positionToAngle(position.data);

            var i=this.minHeightPoints.length;
            while(i--) {
                var point = this.minHeightPoints[i];
                if (angle >= point.angle) {
                    return point.minHeight;
                }
            }

            return this.minHeightPoints[this.minHeightPoints.length-1].minHeight;
        },

        startBonusMode: function () {
            if (!this.inBonusMode) {
                this.inBonusMode = true;
                this.readyForBonus = false;
                this.bonusTimer = this.bonusModeDuration;

                this.environment.enabled = false;
                this.bonusEffect.enabled = true;

                // full health yeii!
                this.setFuel(100);

                this.fire('startbonus');
            }
        },

        stopBonusMode: function () {
            if (this.inBonusMode) {
                this.inBonusMode = false;
                this.bonusTimer = 0;
                this.setBonusMeter(0);

                this.environment.enabled = true;
                this.bonusEffect.enabled = false;

                this.fire('stopbonus');
            }
        },

        setScore: function (score) {
            if (this.score !== score) {
                this.score = score;
                this.fire('score', this.score);
            }
        },

        setBonusMeter: function (value) {
            value = Math.round(pc.math.clamp(value, 0, 100));
            if (this.bonusMeter !== value) {
                this.bonusMeter = value;
                this.fire('bonusmeter', this.bonusMeter);

                if (value >= 100 && !this.readyForBonus) {
                    this.readyForBonus = true;
                    this.fire('bonusready');
                }
            }
        },

        setFuel: function (fuel) {
            fuel = pc.math.clamp(fuel, 0, 100);
            if (this.fuel !== fuel) {
                this.fuel = fuel;
                this.fire('fuel', this.fuel);

                if (this.fuel <= 0) {
                    if (!this.outOfFuel) {
                        this.outOfFuel = true;
                        this.fire('fuelout');
                    }
                } else {
                    if (this.outOfFuel) {
                        this.outOfFuel = false;
                        this.fire('fuelrecovery');
                    }

                    if (this.fuel < 30) {
                        if (!this.fuelLow) {
                            this.fuelLow = true;
                            this.fire('fuellow');
                        }
                    } else {
                        if (this.fuelLow) {
                            this.fuelLow = false;
                            this.fire('fuelok');
                        }
                    }
                }
            }
        },

        setStreak: function (streak) {
            streak = pc.math.clamp(streak, 0, this.maxStreak);
            if (this.streak !== streak) {
                this.streak = streak;
                this.streakCollectibles = 0;
                this.fire('streak', this.streak);
            }
        },

        update: function (dt) {
            TWEEN.update();

            if (this.paused) {
                return;
            }

            if (!this.isOver) {

                if (this.difficulty < this.maxDifficulty) {
                    this.difficultyTimer -= dt;
                    if (this.difficultyTimer <= 0) {
                        this.difficultyTimer = this.increaseDifficultyRate;
                        this.difficulty++;
                    }
                }

                // if the streak timer expires it means
                // the player did not pickup a collectible for a while
                // so reset the streak
                this.streakTimer -= dt;
                if (this.streakTimer <= 0) {
                    this.setStreak(1);
                }

                if (this.inBonusMode) {
                    this.bonusTimer -= dt;
                    this.setBonusMeter(pc.math.lerp(0, 100, this.bonusTimer / this.bonusModeDuration));
                    if (this.bonusTimer <= 0) {
                        this.stopBonusMode();
                    }
                } else {
                    // decrease fuel over time
                    this.setFuel(this.fuel - (this.fuelDecreaseRate + (this.difficulty - 1) * this.fuelDifficultyModifier) * dt);
                }


                // if the player goes below the min height raise a collision event
                var playerPos = this.player.entity.getPosition();
                var minHeight = this.getMinHeightForPosition(playerPos);

                this.player.getTipPosition(vector);

                if (!this.inBonusMode && vector.y < minHeight) {
                    this.onCollision(true);
                } 
            } 
        },

        onPickedCollectible: function (collectible) {
            // when you pick a collectible reset the streak timer
            this.streakTimer = this.streakBreakDuration;

            var points = collectible.points;

            // reduce the points in bonus mode otherwise you will get too many
            if (this.inBonusMode) {
                points = 1;
            }

            if (collectible.isStreak) {
                this.streakCollectibles++;
                if (this.streakCollectibles >= this.numberOfCollectiblesPerStreak) {
                    this.setStreak(this.streak + 1);
                }

                points *= this.streak;
            }


            this.setScore(this.score + points);
            this.setFuel(this.fuel + collectible.fuel);

            if (collectible.effectName) {
                this.particles.spawn(collectible.effectName, collectible.entity.getPosition());
            }

            if (!this.inBonusMode) {
                this.setBonusMeter(this.bonusMeter + points);

                if (collectible.triggerBonusMode) {
                    this.startBonusMode();
                }
            }
        },

        splashScreen: function () {
            this.fire('reset');
            this.fire('splashscreen');
            this.paused = true;

            this.splashEntities.enabled = true;
        },

        startGame: function () {
            this.fire('startgame');
            this.paused = false;

            this.splashEntities.enabled = false;
        },

        restart: function () {
            this.fire('reset');
            this.startGame();
        },

        gameover: function () {
            if (!this.isOver) {
                this.isOver = true;

                var isHighScore = false;
                if (this.score > 0) {
                    var previousScore = this.storage.loadNumber('score', 0);
                    isHighScore = this.score > previousScore;
                    if (isHighScore) {
                        this.storage.store('score', this.score);
                    }
                }
                
                this.fire('gameover', this.score, isHighScore);
            }
        },

        pause: function () {
            if (!this.paused) {
                this.paused = true;
                this.fire('pause');
            }
        },

        unpause: function () {
            if (this.paused) {
                this.paused = false;
                this.fire('unpause');
            }
        },

        getLevelRadius: function () {
            return this.inBonusMode ? this.bonusLevelRadius : this.levelRadius;
        }, 

        onCollision: function (isSolidObstacle) {
            this.fire('collision', isSolidObstacle);

            if (!isSolidObstacle) {
                this.setFuel(this.fuel - this.fuelLostOnHit)
            } else {
                this.setFuel(0);
                this.gameover();
            }
        },

        clampToRadius: function (position) {
            var oldY = position.y;
            position.y = 0;
            position.normalize();
            position.scale(this.getLevelRadius());
            position.y = oldY;
            return position;
        }
    };

    return Game;
});