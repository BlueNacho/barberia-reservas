import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barber-card',
  templateUrl: './barber-card.component.html',
  styleUrls: ['./barber-card.component.scss']
})
export class BarberCardComponent {

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() cel: string = '';
  @Input() age: number = 0;

}
