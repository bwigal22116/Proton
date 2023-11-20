pc.script.create('ui', function (context) {
        
    var Ui = function (entity) {
        this.entity = entity;    
    };

    Ui.prototype = {
        initialize: function () {
            var game = context.root.findByName('Game').script.game;
            game.on('splashscreen', this.onSplashScreen, this);
            game.on('startgame', this.onStartGame, this);
            game.on('pause', this.onPause, this);
            game.on('unpause', this.onUnpause, this);
            game.on('reset', this.reset, this);
            
            this.screens = {
                'pause': this.entity.findByName('ScreenPause'),
                'ingame': this.entity.findByName('ScreenInGame'),
                'initial': this.entity.findByName('ScreenInitial'),
                'gameover': this.entity.findByName('ScreenGameover')
            };
        },

        onPostInitialize: function () {
            // run reset in post initialize to give a chance
            // to all the widgets to initialize themselves first
            this.reset();
        },

        reset: function () {            
            for (var key in this.screens) {
                if (this.screens.hasOwnProperty(key)) {
                    this.screens[key].enabled = false;
                }
            }

            this.currentScreen = null; 
        },

        onSplashScreen: function () {
            this.showScreen('initial');
        },

        onStartGame: function () {
            this.showScreen('ingame');
        },

        onPause: function () {
            this.showScreen('pause');
        },

        onUnpause: function () {
            this.showScreen('ingame'); 
        },

        showScreen: function (screen) {
            if (this.currentScreen) {
                if (this.currentScreen === screen) {
                    return;
                }

                this.hideScreen(this.currentScreen);
            }
            this.currentScreen = screen;
            this.screens[screen].enabled = true;

            return this.screens[screen];
        },

        hideScreen: function (screen) {
            this.currentScreen = null;
            this.screens[screen].enabled = false;
        }
    };

   return Ui;
});