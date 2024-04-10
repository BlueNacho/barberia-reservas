import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.scss']
})

export class ManageBookingsComponent {

  barbers = [
    {
      name: 'Juan',
      cel: '09999999',
      age: 25,
    },
    {
      name: 'Pedro',
      cel: '09999999',
      age: 25,
    },
    {
      name: 'Maria',
      cel: '09999999',
      age: 25,
    },
  ];
}
