import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person.models';

const app = initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  user: User[] = [];
  error: string = '';

  constructor(private httpClient: HttpClient) {}

  // Create
  // HttpClient API post() => create Agent
  createAgent(): Observable<User> {
    return this.httpClient
      .post<User>(
        app.options.databaseURL + '/agent.json',
        JSON.stringify(this.user)
      )
      .pipe(retry(1));
  }

  addAgent(
    type: string,
    name: string,
    firstname: string,
    callsign: string,
    birthday: string,
    nationality: number,
    speciality: [number]
  ) {
    const person: Person = {
      type: type,
      name: name,
      firstname: firstname,
      callsign: callsign,
      birthday: birthday,
      nationality: nationality,
      speciality: speciality,
    };
    this.httpClient
      .post<{ message: string }>(
        app.options.databaseURL + '/agent.json',
        person
      )
      .subscribe((responseDate) => {
        console.log(responseDate.message);
      });
  }

  // Read

  // Update

  // Delete
}
