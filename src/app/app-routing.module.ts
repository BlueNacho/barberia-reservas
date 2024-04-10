import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';

const routes: Routes = [
  { path: '', redirectTo: '/manage-bookings', pathMatch: 'full' },
  { path: 'manage-bookings', component: ManageBookingsComponent },
  { path: 'manage-barbers/:id', component: ManageBookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
