import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarberCardComponent } from './barber-card/barber-card.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { BarberBookingsComponent } from './barber-bookings/barber-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    BarberCardComponent,
    ManageBookingsComponent,
    CancelBookingComponent,
    BarberBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
