import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/shared/crud.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

const app = initializeApp(environment.firebaseConfig);

// Declaration d'un interface List
export interface List {
  id: string;
  item: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  missions = [{ id: 1, mission: 'test' }];
  agents = [{ id: 1, agent: 'testAgent' }];

  countriesList: List[] = [];
  targetList: List[] = [];
  agentList: List[] = [];
  specialitiesList: List[] = [];
  contactList: List[] = [];
  statusList: List[] = [];
  hideoutsList: List[] = [];
  typeList: List[] = [];

  constructor(public crud: CrudService, private router: Router) {}

  addMissionForm = new FormGroup({
    agent: new FormControl(''),
    codeName: new FormControl(''),
    contact: new FormControl(''),
    country: new FormControl(''),
    desc: new FormControl(''),
    endDate: new FormControl(''),
    hideouts: new FormControl(''),
    mission: new FormControl(''),
    specialities: new FormControl(''),
    startDate: new FormControl(''),
    status: new FormControl(''),
    target: new FormControl(''),
    type: new FormControl(''),
  });

  ngOnInit() {
    this.crud.getAgent().subscribe((data) => {
      this.initAgent(data);
    });
    this.crud.getMission().subscribe((data) => {
      this.initMission(data);
    });
    this.getData('target', 'callsign', this.targetList);
    this.getData('countries', 'name', this.countriesList);
    this.getData('contact', 'callsign', this.contactList);
    this.getData('specialities', 'name', this.specialitiesList);
    this.getData('status', 'state', this.statusList);
    this.getData('agent', 'callsign', this.agentList);
    this.getData('countries', 'capital', this.hideoutsList);
    this.getData('types', 'name', this.typeList);
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

  addNewMission() {
    const agent = this.addMissionForm.get('agent')?.value;
    const codeName = this.addMissionForm.get('codeName')?.value;
    const contact = this.addMissionForm.get('contact')?.value;
    const country = this.addMissionForm.get('country')?.value;
    const desc = this.addMissionForm.get('desc')?.value;
    const endDate = this.addMissionForm.get('endDate')?.value;
    const hideouts = this.addMissionForm.get('hideouts')?.value;
    const mission = this.addMissionForm.get('mission')?.value;
    const specialities = this.addMissionForm.get('specialities')?.value;
    const startDate = this.addMissionForm.get('startDate')?.value;
    const status = this.addMissionForm.get('status')?.value;
    const target = this.addMissionForm.get('target')?.value;
    const type = this.addMissionForm.get('type')?.value;

    this.crud.addMission(
      agent,
      codeName,
      contact,
      country,
      desc,
      endDate,
      hideouts,
      mission,
      specialities,
      startDate,
      status,
      target,
      type
    );
    this.addMissionForm.reset();
    this.router.navigate(['/admin']);
  }

  getData(document: string, params: string, list: List[]) {
    return this.crud.getDocument(document).subscribe((data: any) => {
      Object.keys(data).map(function (e) {
        const subArray = {
          id: e,
          item: data[e][params],
        };
        list.push(subArray);
      });
    });
  }
}
