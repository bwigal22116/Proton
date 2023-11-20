pc.script.attribute('simpleGemSound', 'string');
pc.script.attribute('numSimpleGemSounds', 'number');
pc.script.attribute('megaGemSound', 'string');
pc.script.attribute('numMegaGemSounds', 'number');
pc.script.attribute('triggerBonusModeSound', 'string');
pc.script.attribute('cloudHitSound', 'string');
pc.script.attribute('groundHitSound', 'string');
pc.script.attribute('healSound', 'string');
pc.script.attribute('normalMusic', 'string');
pc.script.attribute('bonusMusic', 'string');
pc.script.attribute('clickSound', 'string');
pc.script.attribute('fuelAlarmSound', 'string');
pc.script.attribute('resetNotesTime', 'number', 0.8);

pc.script.create('audio', function (context) {
    var vector = new pc.Vec3();

    var Audio = function (entity) {
        this.entity = entity;
        this.lastPlayerPosition = new pc.Vec3();
    };

    Audio.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.game = context.root.findByName('Game').script.game;
            this.musicSource = this.entity.findByName('Music').audiosource;
            this.engineSource = this.entity.findByName('SoundEngine').audiosource;

            // use multiple audio sources so that 
            // consecutive sounds are not cut off 
            this.genericSoundSources = [
                this.entity.findByName('SoundSource1').audiosource,
                this.entity.findByName('SoundSource2').audiosource,
            ];
            this.currentAudioSource = 0;

            this.sounds = [
                this.engineSource
            ].concat(this.genericSoundSources);

            this.soundVolumes = [];
            for (var i=0, len = this.sounds.length; i<len; i++) {
                this.soundVolumes.push(this.sounds[i].volume);
            }

            this.originalMusicVolume = this.musicSource.volume;
            this.game = context.root.findByName('Game').script.game;
            this.musicVolume = this.game.storage.loadNumber('music', this.originalMusicVolume);
            if (this.musicVolume > this.originalMusicVolume) {
                this.musicVolume = this.originalMusicVolume;
            }

            this.soundsVolume = this.game.storage.loadNumber('sounds', 1);


            this.game.on('splashscreen', this.onSplashScreen, this);
            this.game.on('startgame', this.onStartGame, this);
            this.game.on('pickup', this.onCollectible, this);
            this.game.on('startbonus', this.onBonusStart, this);
            this.game.on('stopbonus', this.onBonusStop, this);
            this.game.on('reset', this.reset, this);
            this.game.on('collision', this.onCollision, this);
            this.game.on('fuelout', this.onFuelOut, this);
            this.game.on('fuellow', this.onLowFuel, this);
            this.game.on('gameover', this.gameover, this);

            this.reset();
        },

        onSplashScreen: function () {
            this.sounds.forEach(function (sound) {
                sound.stop();
            })
        },

        onStartGame: function () {
            this.engineSource.play('engine');
        },

        onCollectible: function (collectible) {
            var sound;
            if (collectible.triggerBonusMode) {
                sound = this.triggerBonusModeSound;
            } else if (collectible.isHeal) {
                sound = this.healSound;
            } else if (collectible.isMegaGem) {
                sound = pc.string.format('{0}_{1}', this.megaGemSound, (this.megaGemSoundIndex + 1));
                this.megaGemSoundIndex = (this.megaGemSoundIndex + 1) % this.numMegaGemSounds;
                this.megaGemSoundTimer = this.resetNotesTime;
            } else {
                sound = pc.string.format('{0}_{1}', this.simpleGemSound, (this.simpleGemSoundIndex + 1));
                this.simpleGemSoundIndex = (this.simpleGemSoundIndex + 1) % this.numSimpleGemSounds;
                this.simpleGemSoundTimer = this.resetNotesTime;
            }

            this.playOneOffSound(sound);
        },

        onLowFuel: function () {
            this.playOneOffSound(this.fuelAlarmSound);
        },

        onFuelOut: function () {
            this.onLowFuel();
            this.onCollision();
        },

        playOneOffSound: function (sound) {
            var source = this.getFreeAudioSource();
            source.play(sound);
        },

        playClickSound: function () {
            this.playOneOffSound(this.clickSound);
        },

        getFreeAudioSource: function () {
            var result = this.genericSoundSources[this.currentAudioSource];
            this.currentAudioSource = (this.currentAudioSource + 1) % this.genericSoundSources.length; 
            return result;
        },

        onBonusStart: function () {
            this.musicSource.play(this.bonusMusic);
        },

        onBonusStop: function () {
            this.musicSource.play(this.normalMusic);
        },

        reset: function () {
            this.setMusicVolume(this.musicVolume);
            this.setSoundsVolume(this.soundsVolume);
            this.musicSource.pitch = 1;
            this.musicSource.play(this.normalMusic);
            this.engineSource.pitch = 1;
            this.simpleGemSoundIndex = 0;
            this.megaGemSoundIndex = 0;
            this.simpleGemSoundTimer = 0;
            this.megaGemSoundTimer = 0;
            this.lastPlayerPosition.copy(this.game.player.entity.getPosition().clone());
        },  

        onCollision: function (isSolidObstacle) {
            this.playOneOffSound(isSolidObstacle ? this.groundHitSound : this.cloudHitSound);
        },

        gameover: function () {
            var self = this;
            var music = this.musicSource;
            var engine = this.engineSource;

            var tween = new TWEEN.Tween({
                pitch: 1
            }).to({
                pitch: 0.1
            }, 2000).onUpdate(function () {
                engine.pitch = this.pitch;
                music.pitch = this.pitch;
            }).onComplete(function () {
                engine.pitch = 1;
                music.pitch = 1;
            }).start();
        },

        toggleMusic: function (on) {
            this.setMusicVolume(on ? this.originalMusicVolume : 0);
        },

        setMusicVolume: function (volume) {
            this.musicVolume = volume;
            this.musicSource.volume = volume;
            this.game.storage.store('music', volume);
        },

        isMusicEnabled: function () {
            return !!this.musicVolume;
        },

        toggleSounds: function (on) {
            this.setSoundsVolume(on ? 1 : 0);
        },

        setSoundsVolume: function (volume) {
            this.soundsVolume = volume;
            for (var i=0, len=this.sounds.length; i<len; i++) {
                this.sounds[i].volume = this.soundVolumes[i] * volume;
            }

            this.game.storage.store('sounds', volume);
        },

        areSoundsEnabled: function () {
            return !!this.soundsVolume;
        },

        update: function (dt) {
            if (this.game.isOver) {
                return;
            }

            this.megaGemSoundTimer -= dt;
            if (this.megaGemSoundTimer <= 0) {
                this.megaGemSoundIndex = 0;
            }

            this.simpleGemSoundTimer -= dt;
            if (this.simpleGemSoundTimer <= 0) {
                this.simpleGemSoundIndex = 0;
            }

            var position = this.game.player.entity.getPosition();
            vector.sub2(position, this.lastPlayerPosition);

            this.lastPlayerPosition.copy(position);
        }
    };

    return Audio;
});