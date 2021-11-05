import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';

const app = initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private persons: Person[] = [];
  private personsUpdated = new Subject<Person[]>();

  error: string = '';

  constructor(private httpClient: HttpClient) {}

  // Create
  // HttpClient API post() => create Agent
  addAgent(
    type: string,
    name: string,
    firstname: string,
    callsign: string,
    birthday: string,
    nationalityId: number,
    specialityId: [number]
  ) {
    const person: Person = {
      type: type,
      name: name,
      firstname: firstname,
      callsign: callsign,
      birthday: birthday,
      nationalityId: nationalityId,
      specialityId: specialityId,
    };

    this.httpClient
      .post<{ message: string }>(
        app.options.databaseURL + '/agent.json',
        person
      )
      .subscribe((responseDate) => {
        console.log(responseDate.message);
        this.persons.push(person);
        this.personsUpdated.next([...this.persons]);
      });
  }
  // Read
  getMission() {
    this.httpClient
      .get(app.options.databaseURL + '/agent.json')
      .subscribe((data) => {});
  }

  // Update

  // Delete
}
