pc.script.create('input', function (context) {
    var Input = function (entity) {
        this.entity = entity;
    };

    Input.prototype = {
        initialize: function () {
            this.game = context.root.findByName('Game').script.game;
            
            if (context.touch) {
                context.touch.on('touchstart', this.fly, this);
                context.touch.on('touchend', this.stopFly, this);
            } 
        },

        fly: function () {
            if (!this.game.isOver) {
                this.game.player.startFlying();
            }
        },

        stopFly: function () {
            if (!this.game.isOver) {
                this.game.player.stopFlying();
            }
        },

        update: function (dt) {
            if (!this.game.isOver) {
                if (context.keyboard.wasReleased(pc.input.KEY_SPACE) ||
                    context.mouse.wasReleased(pc.input.MOUSEBUTTON_LEFT)) {

                    this.stopFly();

                } else if (context.keyboard.wasPressed(pc.input.KEY_SPACE) ||
                           context.mouse.wasPressed(pc.input.MOUSEBUTTON_LEFT)) {

                    this.fly();
                }
            }
        }
    };

    return Input;
});