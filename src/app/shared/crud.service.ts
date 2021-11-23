import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';
import { Mission } from '../models/mission';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const app = initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  personsSubject = new Subject<Person[]>();
  missionsSubject = new Subject<Mission[]>();

  private persons: Person[] = [];
  private missions: Mission[] = [];

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

  // READ
  getAgent() {
    this.httpClient
      .get<{
        id: string;
        agents: any;
      }>(this.apiurl + '/agent.json')
      .pipe(
        map((agentData: any) => {
          return Object.keys(agentData).map((agent: any) => {
            return {
              id: agent,
              type: agentData[agent].type,
              lname: agentData[agent].lname,
              fname: agentData[agent].fname,
              callsign: agentData[agent].callsign,
              birthday: agentData[agent].birthday,
              nationalityId: agentData[agent].nationalityId,
              specialities: agentData[agent].specialities,
            };
          });
        })
      )
      .subscribe((transformAgent) => {
        this.persons = transformAgent;
        this.personsSubject.next([...this.persons]);
      });
  }

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
      id: null,
      type: type,
      lname: lname,
      fname: fname,
      callsign: callsign,
      birthday: birthday,
      nationalityId: nationalityId,
      specialities: specialities,
    };

    this.httpClient
      .post<{ id: string }>(this.apiurl + '/' + type + '.json', person)
      .subscribe((data) => {
        const id = data.id;
        person.id = id;
        this.persons.push(person);
        this.personsSubject.next([...this.persons]);
      });
  }

  // UPDATE
  getUpdateAgent() {
    return this.personsSubject.asObservable();
  }

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
      id: null,
      type: type,
      lname: lname,
      fname: fname,
      callsign: callsign,
      birthday: birthday,
      nationalityId: nationalityId,
      specialities: specialities,
    };
    this.httpClient.patch<Person>(
      this.apiurl + '/agent/' + id + '.json',
      person
    );
  }
  // DELETE

  deleteAgent(id: string | null) {
    this.httpClient
      .delete<Person>(this.apiurl + '/agent/' + id + '.json/')
      .subscribe(() => {
        const updateAgent = this.persons.filter((agent) => agent.id !== id);
        this.persons = updateAgent;
        this.personsSubject.next([...this.persons]);
      });
  }

  // **************** Missions *******************
  // Create
  addMission(
    agent: [Person],
    codeName: string,
    contact: [Person],
    country: number,
    desc: string,
    endDate: Date,
    hideouts: [string],
    mission: string,
    specialities: number,
    startDate: Date,
    status: number,
    target: [Person],
    type: string
  ) {
    const missionOne: Mission = {
      id: null,
      agent: agent,
      codeName: codeName,
      contact: contact,
      country: country,
      desc: desc,
      endDate: endDate,
      hideouts: hideouts,
      mission: mission,
      specialities: specialities,
      startDate: startDate,
      status: status,
      target: target,
      type: type,
    };

    return this.httpClient
      .post<{ id: string }>(this.apiurl + '/missions.json', missionOne)
      .subscribe((data) => {
        const id = data.id;
        missionOne.id = id;
        this.missions.push(missionOne);
        this.missionsSubject.next([...this.missions]);
      });
  }
  // Read
  getMission() {
    return this.httpClient
      .get<{ id: string; missionsList: any }>(this.apiurl + '/missions.json')
      .pipe(
        map((missionData: any) => {
          return Object.keys(missionData).map(function (missionOne: any) {
            return {
              id: missionOne,
              agent: missionData[missionOne].agent,
              codeName: missionData[missionOne].codeName,
              contact: missionData[missionOne].contact,
              country: missionData[missionOne].number,
              desc: missionData[missionOne].desc,
              endDate: missionData[missionOne].endDate,
              hideouts: missionData[missionOne].hideouts,
              mission: missionData[missionOne].mission,
              specialities: missionData[missionOne].specialities,
              startDate: missionData[missionOne].startDate,
              status: missionData[missionOne].status,
              target: missionData[missionOne].target,
              type: missionData[missionOne].type,
            };
          });
        })
      )
      .subscribe((transformMission) => {
        this.missions = transformMission;
        this.missionsSubject.next([...this.missions]);
      });
  }

  getUpdateMission() {
    return this.missionsSubject.asObservable();
  }
  // Update
  updateMission(
    id: string,
    agent: [Person],
    codeName: string,
    contact: [Person],
    country: number,
    desc: string,
    endDate: Date,
    hideouts: [string],
    mission: string,
    specialities: number,
    startDate: Date,
    status: number,
    target: [Person],
    type: string
  ) {
    const missionOne: Mission = {
      id: null,
      agent: agent,
      codeName: codeName,
      contact: contact,
      country: country,
      desc: desc,
      endDate: endDate,
      hideouts: hideouts,
      mission: mission,
      specialities: specialities,
      startDate: startDate,
      status: status,
      target: target,
      type: type,
    };
    return this.httpClient.patch<Mission>(
      this.apiurl + '/missions/' + id + '.json',
      missionOne
    );
  }
  // Delete
  deleteMission(id: string | null) {
    this.httpClient
      .delete<Mission>(this.apiurl + '/missions/' + id + '.json/')
      .subscribe(() => {
        const updateMission = this.missions.filter(
          (mission) => mission.id !== id
        );
        this.missions = updateMission;
        this.missionsSubject.next([...this.missions]);
      });
  }

  // **************** Get Data *******************
  getDocument(document: string) {
    return this.httpClient.get(this.apiurl + '/' + document + '.json');
  }
}
