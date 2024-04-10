import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.scss']
})
export class CancelBookingComponent {
  @Input() booking: any;
  constructor() { }

  cancelBooking() {
    
    console.log('Cancel booking');
  }
}
