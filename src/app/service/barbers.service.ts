import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarbersService {

  barbers = [
    {
      id: 1,
      name: 'Juan',
      cel: '09999999',
      age: 25,
    },
    {
      id: 2,
      name: 'Pedro',
      cel: '09999999',
      age: 25,
    },
    {
      id: 3,
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
