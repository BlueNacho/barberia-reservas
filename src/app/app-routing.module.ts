import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { BarberBookingsComponent } from './barber-bookings/barber-bookings.component';

const routes: Routes = [
  { path: '', redirectTo: '/manage-bookings', pathMatch: 'full' },
  { path: 'manage-bookings', component: ManageBookingsComponent },
  { path: 'manage-bookings/:id', component: BarberBookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
