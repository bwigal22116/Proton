pc.script.create('ui_paused', function (context) {
    var Ui_paused = function (entity) {
        this.entity = entity;
    };

    Ui_paused.prototype = {
        initialize: function () {
            this.playButton = this.entity.findByName('SpritePlay').script.sprite;
            this.exitButton = this.entity.findByName('SpriteExit').script.sprite;
            this.restartButton = this.entity.findByName('SpriteRestart').script.sprite;
            this.soundOnButton = this.entity.findByName('SpriteSoundOn').script.sprite;
            this.soundOffButton = this.entity.findByName('SpriteSoundOff').script.sprite;
            this.musicOnButton = this.entity.findByName('SpriteMusicOn').script.sprite;
            this.musicOffButton = this.entity.findByName('SpriteMusicOff').script.sprite;

            this.playButton.on('click', this.onPlayClicked, this);
            this.exitButton.on('click', this.onExitClicked, this);
            this.restartButton.on('click', this.onRestartClicked, this);
            this.soundOnButton.on('click', this.onSoundOnClicked, this);
            this.soundOffButton.on('click', this.onSoundOffClicked, this);
            this.musicOnButton.on('click', this.onMusicOnClicked, this);
            this.musicOffButton.on('click', this.onMusicOffClicked, this);

            this.game = context.root.findByName('Game').script.game;
        },

        onEnable: function () {
            this.initAudio();
        },

        onPlayClicked: function () {
            this.game.audio.playClickSound();
            this.game.unpause();
        },

        onExitClicked: function () {
            this.game.audio.playClickSound();
            this.game.splashScreen();
        },

        onRestartClicked: function () {
            this.game.audio.playClickSound();
            this.game.restart();
        },

        onSoundOnClicked: function () {
            this.game.audio.playClickSound();
            this.game.audio.toggleSounds(false);
            this.soundOnButton.entity.enabled = false;
            this.soundOffButton.entity.enabled = true;
        },

        onSoundOffClicked: function () {
            this.game.audio.playClickSound();
            this.game.audio.toggleSounds(true);
            this.soundOnButton.entity.enabled = true;
            this.soundOffButton.entity.enabled = false;
        },

        onMusicOnClicked: function () {
            this.game.audio.playClickSound();
            this.game.audio.toggleMusic(false);
            this.musicOnButton.entity.enabled = false;
            this.musicOffButton.entity.enabled = true;
        },

        onMusicOffClicked: function () {
            this.game.audio.playClickSound();
            this.game.audio.toggleMusic(true);
            this.musicOnButton.entity.enabled = true;
            this.musicOffButton.entity.enabled = false;
        },

        initAudio: function () {
            var soundsOn = this.game.audio.areSoundsEnabled();
            this.soundOnButton.entity.enabled = soundsOn;
            this.soundOffButton.entity.enabled = !soundsOn;

            var musicOn = this.game.audio.isMusicEnabled();
            this.musicOnButton.entity.enabled = musicOn;
            this.musicOffButton.entity.enabled = !musicOn;
        }
    };

    return Ui_paused;
});