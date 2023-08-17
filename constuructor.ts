interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{

    constructor(private location?: Point, private color?: string) {};

    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi x: ${this.location.x} y: ${this.location.y} konumundan, x: ${point.x} y: ${point.y} konumuna ilerliyor`);
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

