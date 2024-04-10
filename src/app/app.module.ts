import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarberCardComponent } from './barber-card/barber-card.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarberCardComponent,
    ManageBookingsComponent,
    CancelBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
