var utils = {
    map: function (entity, component, method) {
        if (entity[component]) {
            method(entity[component]);
        } 

        entity.getChildren().map(function (child) {
            utils.map(child, component, method);
        });
    },

    positionToAngle: function (position) {
        var angle = Math.atan2(position[0], position[2]) * pc.math.RAD_TO_DEG;
        if (angle < 0) {
            angle += 360;
        }

        return angle;
    } 
}