import { Vehicle } from "./Vehicle";
import { Point } from "./Point";


export class Bus implements Vehicle{
    travelTo(point: Point): void {
        console.log(`taksi x: ${point.x} konumundan y: ${point.y} konumuna ilerliyor`);
    }
}