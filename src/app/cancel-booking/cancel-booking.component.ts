import { Component, Input } from '@angular/core';
import { bookingInterface } from '../types/bookingInterface';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.scss']
})
export class CancelBookingComponent {
  @Input() booking: bookingInterface = {
    id: 0,
    date: '',
    client: '',
    service: '',
    barber: '',
    status: '',
  }

  description: string = '';

  constructor() { }

  cancelBooking() {
    this.booking.status = 'cancelled';
    this.booking.description = this.description;
    console.log('Cancel booking');
  }
}
