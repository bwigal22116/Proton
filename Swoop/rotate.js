pc.script.attribute('speed', 'number', 5);

pc.script.create('rotate', function (context) {
    var Rotate = function (entity) {
        this.entity = entity;
    };

    Rotate.prototype = {
        update: function (dt) {
            this.entity.rotate(0, this.speed*dt, 0); 
        }
    };

    return Rotate;
});