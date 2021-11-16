import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';
import { Mission } from '../models/mission';

const app = initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private persons: Person[] = [];
  private personsUpdated = new Subject<Person[]>();

  mongoUrl = 'https:localhost:3000';
  apiurl =
    'https://spyfield-b2064-default-rtdb.europe-west1.firebasedatabase.app';
  httpOptions = {
    header: new HttpHeaders({
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
    lname: string,
    fname: string,
    callsign: string,
    birthday: string,
    nationalityId: number,
    specialities: [number]
  ) {
    const person: Person = {
      type: type,
      lname: lname,
      fname: fname,
      callsign: callsign,
      birthday: birthday,
      nationalityId: nationalityId,
      specialities: specialities,
    };

    return this.httpClient
      .post<{ message: string }>(this.apiurl + '/' + type + '.json', person)
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
  updateAgent(
    id: string,
    type: string,
    lname: string,
    fname: string,
    callsign: string,
    birthday: string,
    nationalityId: number,
    specialities: [number]
  ) {
    const person: Person = {
      type: type,
      lname: lname,
      fname: fname,
      callsign: callsign,
      birthday: birthday,
      nationalityId: nationalityId,
      specialities: specialities,
    };
    return this.httpClient.patch<Person>(
      this.apiurl + '/agent/' + id + '.json',
      person
    );
  }
  // DELETE

  deleteAgent(id: string) {
    return this.httpClient.delete<Person>(
      this.apiurl + '/agent/' + id + '.json/'
    );
  }

  // **************** Missions *******************
  // Read
  getMission() {
    return this.httpClient.get(this.apiurl + '/missions.json');
  }

  // Update

  // Delete
  deleteMission(id: string) {
    return this.httpClient.delete<Mission>(
      this.apiurl + '/missions/' + id + '.json/'
    );
  }
}
