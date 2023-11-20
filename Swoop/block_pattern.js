pc.script.attribute('from', 'vector');
pc.script.attribute('to', 'vector');

pc.script.create('block_pattern', function (context) {
    var Block_pattern = function (entity) {
        this.entity = entity;    
    };

    Block_pattern.prototype = {
        postInitialize: function () {
            var game = context.root.findByName('Game').script.game;
            game.patterns.addBlock(this);
        }
    };

   return Block_pattern;
});