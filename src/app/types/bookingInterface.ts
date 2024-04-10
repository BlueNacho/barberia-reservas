export interface bookingInterface {
    id: number;
    date: string;
    client: string;
    service: string;
    barber: string;
    status: string;
    description?: string;
}