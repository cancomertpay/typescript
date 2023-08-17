interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
    addPassengers(passenger: Passenger):void;
    removePassengers(passenger: Passenger): void;
}

interface Passenger {
    name: string;
    phone: number;
}

let travelTo = (point: Point) => {
    //..
}

let getDistance = (pointA: Point, pointB: Point) {
    // ..
}

travelTo({
    x: 1,
    y: 2
})