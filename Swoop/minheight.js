pc.script.create('minheight', function (context) {
    var Minheight = function (entity) {
        this.entity = entity;    
    };

    Minheight.prototype = {
        postInitialize: function () {
            var game = context.root.findByName('Game').script.game;
            game.addMinHeightPoint(this.entity.getPosition());
        }
    };

   return Minheight;
});