import { Injectable } from '@angular/core';
import { BarbersService } from './barbers.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {



  constructor(private barberService: BarbersService) { }

  cancelBooking(bookingId: number, barberId: number, description: string) {
    const barber = this.barberService.getBarber(barberId);
    if (barber) {
      const booking = barber.booking.pending.find(booking => booking.id === bookingId);
      if (booking) {
        booking.status = 'cancelled';
        booking.description = description;
        barber.booking.cancelled.push(booking);
        barber.booking.pending = barber.booking.pending.filter(booking => booking.id !== bookingId);
      }
    }
  }

  finishBooking(bookingId: number, barberId: number) {
    const barber = this.barberService.getBarber(barberId);
    if (barber) {
      const booking = barber.booking.pending.find(booking => booking.id === bookingId);
      if (booking) {
        booking.status = 'finished';
        barber.booking.finished.push(booking);
        barber.booking.pending = barber.booking.pending.filter(booking => booking.id !== bookingId);
      }
    }
  }
}
