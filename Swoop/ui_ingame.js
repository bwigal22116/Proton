pc.script.create('ui_ingame', function (context) {
    var Ui_ingame = function (entity) {
        this.entity = entity;
    };

    Ui_ingame.prototype = {
        initialize: function () {
            this.game = context.root.findByName('Game').script.game;
            this.game.on('reset', this.reset, this);
            this.game.on('score', this.drawScore, this);
            this.game.on('fuel', this.drawFuel, this);
            this.game.on('bonusmeter', this.drawBonusMeter, this);
            this.game.on('gameover', this.onGameOver, this);
            this.game.on('fuellow', this.onFuelLow, this);
            this.game.on('fuelout', this.onFuelOut, this);
            this.game.on('fuelrecovery', this.onFuelRecovery, this);
            this.game.on('streak', this.onStreakChanged, this);

            this.pauseButton = this.entity.findByName('SpritePause').script.sprite;
            this.scoreText = this.entity.findByName('TextScore').script.font_renderer;
            this.scoreTextShadow = this.entity.findByName('TextScoreShadow').script.font_renderer;
            this.fuelProgress = this.entity.findByName('ProgressFuel').script.progressbar;
            this.bonusProgress = this.entity.findByName('ProgressBonus').script.progressbar;

            this.gameoverSprite = this.entity.getParent().findByName('SpriteGameover');
            this.lowFuel = this.entity.getParent().findByName('SpriteLowFuel');
            this.noFuel = this.entity.getParent().findByName('SpriteNoFuel');

            this.bonusStreak = [];
            for (var i=0, len=this.game.maxStreak; i<len; i++) {
                var sprite = this.entity.getParent().findByName('SpriteStreak' + (i+1).toString());
                if (sprite) {
                    this.bonusStreak.push(sprite);
                }
            }

            this.pauseButton.on('click', this.onPauseClicked, this);

            this.reset();
        },

        reset: function () {
            this.streak = 1;
            this.hasFuel = true;
            this.lowFuel.enabled = false;
            this.noFuel.enabled = false;
            this.gameoverSprite.enabled = false;

            for (var i=0, len=this.bonusStreak.length; i<len; i++) {
                this.bonusStreak[i].enabled = false;
            }
        },

        postInitialize: function () {
            this.drawScore(0);
            this.drawFuel(100);
            this.drawBonusMeter(0);
        },

        onEnable: function () {
            this.onStreakChanged(this.streak);
            if (!this.hasFuel) {
                this.onFuelOut();
            }
        },

        onDisable: function () {
            this.lowFuel.enabled = false;
            this.gameoverSprite.enabled = false;
            this.noFuel.enabled = false;

            for (var i=0, len=this.bonusStreak.length; i<len; i++) {
                this.bonusStreak[i].enabled = false;
            } 
        },

        onPauseClicked: function () {
            this.game.audio.playClickSound();
            this.game.pause();
        },

        drawScore: function (score) {
            var txt = score.toString();
            this.scoreText.text = txt;
            this.scoreTextShadow.text = txt;
        },

        drawFuel: function (fuel) {
            this.fuelProgress.setProgress(fuel * 0.01);
        },

        drawBonusMeter: function (bonus) {
            this.bonusProgress.setProgress(bonus * 0.01);
        },

        onFuelLow: function () {
            this.lowFuel.enabled = true;;
        },

        onFuelOut: function () {
            this.hasFuel = false;
            this.noFuel.enabled = true;
        },

        onFuelRecovery: function () {
            this.hasFuel = true;
            this.noFuel.enabled = false;
        },

        onStreakChanged: function (streak) {
            this.streak = streak;
            for (var i=0, len=this.bonusStreak.length; i<len; i++) {
                this.bonusStreak[i].enabled = i  === streak - 2;
            }
        }, 

        getUi: function () {
            return this.entity.getParent().script.ui;
        },

        onGameOver: function (score, isHighScore) {
            this.gameoverSprite.enabled = true;
            this.noFuel.enabled = false;

            setTimeout(function () {
                this.gameoverSprite.enabled = false;
                var gameOverScreen = this.getUi().showScreen('gameover').script.ui_gameover;
                gameOverScreen.setScore(score, isHighScore);
            }.bind(this), 2000);
        }
    };

    return Ui_ingame;
});