import { Component } from '@angular/core';
import { BarbersService } from '../service/barbers.service';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.scss']
})

export class ManageBookingsComponent {

barbers = this.barbersService.getBarbers();

constructor(private barbersService: BarbersService) { }
  
}
