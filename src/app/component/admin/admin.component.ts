import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/shared/crud.service';

const app = initializeApp(environment.firebaseConfig);

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  person = {
    type: 'Agent',
    name: 'Pan',
    firstname: 'Peter',
    callsign: 'Hey Peeeteer',
    birthday: '27 / 08 / 1987',
    nationality: 14,
    speciality: 5,
  };

  missions = [];
  agents = [];
  constructor(private httpClient: HttpClient, public crud: CrudService) {}

  ngOnInit() {
    this.crud.getAgent().subscribe((data) => {
      this.initAgent(data);
    });
    this.crud.getMission().subscribe((data) => {
      this.initMission(data);
    });
  }

  initAgent(data: any) {
    const dataDisplay: any = [];
    Object.keys(data).map(function (e) {
      const agents = { id: e, agent: data[e]['callsign'] };
      dataDisplay.push(agents);
    });
    this.agents = dataDisplay;
  }
  initMission(data: any) {
    const dataDisplay: any = [];
    Object.keys(data).map(function (e) {
      const missions = { id: e, mission: data[e]['codeName'] };
      dataDisplay.push(missions);
    });
    this.missions = dataDisplay;
  }
}
