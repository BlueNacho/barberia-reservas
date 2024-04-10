import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarbersService {

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

  constructor() { }

  getBarbers() {
    return this.barbers;
  }
}
