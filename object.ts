interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi x: ${point.x} konumundan y: ${point.y} konumuna ilerliyor`);
        
    }
}

class Bus implements Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi x: ${point.x} konumundan y: ${point.y} konumuna ilerliyor`);
    }
}

let taxi_1: Taxi = new Taxi();

taxi_1.travelTo({ x: 1, y: 2 });

taxi_1.currentLocation ={x: 1, y:2}

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
