import { Injectable } from '@angular/core';
import { Barber } from '../types/barberInterface';

@Injectable({
  providedIn: 'root'
})
export class BarbersService {

  barbers : Barber[] = [
    {
      id: 1,
      name: 'Juan',
      cel: '09999999',
      age: 25,
      booking : {
        cancelled: [],
        finished: [],
        pending: []
      }
    },
    {
      id: 2,
      name: 'Pedro',
      cel: '09999999',
      age: 25,
      booking : {
        cancelled: [],
        finished: [],
        pending: []
      }
    },
    {
      id: 3,
      name: 'Maria',
      cel: '09999999',
      age: 25,
      booking : {
        cancelled: [],
        finished: [],
        pending: []
      }
    },
  ];

  constructor() { }

  getBarbers() {
    return this.barbers;
  }

  getBarber(id: number) {
    return this.barbers.find(barber => barber.id === id);
  }
}
