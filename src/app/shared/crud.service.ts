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

  apiurl =
    'https://spyfield-b2064-default-rtdb.europe-west1.firebasedatabase.app';
  httpOptions = {
    header: new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE, OPTIONS',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  // **************** AGENT *******************
  // CREATE
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

    return this.httpClient
      .post<{ message: string }>(
        this.apiurl + '/' + type + '.json',
        person,
        this.httpOptions
      )
      .subscribe(() => {
        this.persons.push(person);
        this.personsUpdated.next([...this.persons]);
      });
  }

  // READ
  getAgent() {
    return this.httpClient.get<Person>(this.apiurl + '/agent.json');
  }

  // UPDATE

  // DELETE

  deleteAgent() {
    return this.httpClient.delete<Person>(this.apiurl + '/agent.json/');
  }

  // **************** Missions *******************
  // Read
  getMission() {
    return this.httpClient.get(this.apiurl + '/missions.json');
  }

  // Update

  // Delete
}
