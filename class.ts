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
        
    }
}

class Bus implements Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void {

    }
}