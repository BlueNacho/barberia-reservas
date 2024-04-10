import { bookingInterface } from "./bookingInterface";

export interface Barber {
    id: number;
    name: string;
    cel: string;
    age: number;
    booking : {
        cancelled: bookingInterface[],
        finished: bookingInterface[],
        pending: bookingInterface[]
    }
}