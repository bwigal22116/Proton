pc.script.attribute('entry', 'number');
pc.script.attribute('exit', 'number');
pc.script.attribute('weight', 'number', 1, {
    min: 1
});
pc.script.attribute('difficulty', 'number', 1, {
    min: 1
});
pc.script.attribute('spaceAfter', 'number', 10);
pc.script.attribute('isBonusMode', 'boolean', false);
pc.script.attribute('horizontalScale', 'number', 1);

pc.script.create('pattern', function (context) {
    var Pattern = function (entity) {
        this.entity = entity;    
    };

    Pattern.prototype = {
        initialize: function () {
            this.width = 0;
            this.entity.getChildren().forEach(function (child) {
                this.width = Math.max(child.getLocalPosition().x, this.width);
            }.bind(this));
        }
    };

   return Pattern;
});