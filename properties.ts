interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{

    constructor(private _location?: Point, private _color?: string) {};

    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi x: ${this._location.x} y: ${this._location.y} konumundan, x: ${point.x} y: ${point.y} konumuna ilerliyor`);
    }

    get Location() {
        return this._location;
    }

    set Location(value: Point) {
        if(value.x < 0 || value.y < 0){
            throw new Error('kordinat bilgileri negatif olamaz')
        }
        this._location = value;
    }
}

class Bus implements Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi x: ${point.x} konumundan y: ${point.y} konumuna ilerliyor`);
    }
}

let taxi_1: Taxi = new Taxi({x: 1, y:2});

taxi_1.travelTo({ x: 5, y: 6 });

