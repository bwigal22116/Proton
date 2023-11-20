pc.script.create('ui_initial', function (context) {
    var Ui_initial = function (entity) {
        this.entity = entity;
    };

    Ui_initial.prototype = {
        initialize: function () {
            this.playButton = this.entity.findByName('SpritePlay').script.sprite;
            this.playButton.on('click', this.onPlayClicked, this);
            this.game = context.root.findByName('Game').script.game;
        },

        onPlayClicked: function () {
            this.game.audio.playClickSound();
            this.game.startGame();
        },

        update: function (dt) {
            if (context.keyboard.wasPressed(pc.input.KEY_SPACE) ||
                context.keyboard.wasPressed(pc.input.KEY_RETURN)) {
                this.onPlayClicked();
            }
        }
    };

    return Ui_initial;
});