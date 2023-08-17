var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    ;
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(this.location.x, " y: ").concat(this.location.y, " konumundan, x: ").concat(point.x, " y: ").concat(point.y, " konumuna ilerliyor"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(point.x, " konumundan y: ").concat(point.y, " konumuna ilerliyor"));
    };
    return Bus;
}());
var taxi_1 = new Taxi({ x: 1, y: 2 });
taxi_1.travelTo({ x: 5, y: 6 });
