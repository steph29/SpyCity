import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';
import { AuthService } from '../services/auth.service';
import { Mission } from '../models/mission';

const app = initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiUrl =
    'https://spyfield-b2064-default-rtdb.europe-west1.firebasedatabase.app';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    }),
  };
  private persons: Person[] = [];
  private personsUpdated = new Subject<Person[]>();

  constructor(private httpClient: HttpClient, private auth: AuthService) {}
  // ***************** AGENT *************************
  // Create
  // HttpClient API post() => create Agent
  addAgent(
    id: string | null,
    type: string,
    name: string,
    firstname: string,
    callsign: string,
    birthday: string,
    nationalityId: number,
    specialityId: [number]
  ) {
    const person: Person = {
      id: null,
      type: type,
      name: name,
      firstname: firstname,
      callsign: callsign,
      birthday: birthday,
      nationalityId: nationalityId,
      specialityId: specialityId,
    };
    return this.httpClient
      .post<Person>(
        this.apiUrl + '/' + type + '.json',
        person,
        this.httpOptions
      )
      .subscribe(() => {
        this.persons.push(person);
        this.personsUpdated.next([...this.persons]);
      });
  }

  // Read
  getAgent() {
    return this.httpClient.get<Person[]>(this.apiUrl + '/agent.json');
  }

  // app.options.databaseUrl

  // Update

  // Delete
  deleteAgent(id: string) {
    return this.httpClient.delete<Person[]>(this.apiUrl + '/agent.json' + id);
  }
  // ***************** MISSIONS *************************
  getMission() {
    return this.httpClient.get<Mission[]>(this.apiUrl + '/missions.json');
  }
}
