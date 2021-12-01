import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/shared/crud.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/models/person';
import { Mission } from 'src/app/models/mission';

const app = initializeApp(environment.firebaseConfig);

// Declaration d'un interface List
export interface List {
  id: string;
  item: any;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  missions: Mission[] = [];
  agents: Person[] = [];
  visited = new Date();

  private agentSub = Subscription;

  countriesList: List[] = [];
  targetList: List[] = [];
  agentList: List[] = [];
  specialitiesList: List[] = [];
  contactList: List[] = [];
  statusList: List[] = [];
  hideoutsList: List[] = [];
  typeList: List[] = [];
  arrayList: List[] = [];

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
    this.crud.getAgent();
    this.crud.getUpdateAgent().subscribe((agent: Person[]) => {
      this.agents = agent;
    });
    setTimeout(() => {
      this.crud.getAgent();
    }, 1000);
    this.crud.getMission();
    this.crud.getUpdateMission().subscribe((mission: Mission[]) => {
      this.missions = mission;
    });
    setTimeout(() => {
      this.crud.getMission();
    }, 1000);
    this.getData('target', this.targetList);
    this.getData('countries', this.countriesList);
    this.getData('contact', this.contactList);
    this.getData('specialities', this.specialitiesList);
    this.getData('status', this.statusList);
    this.getData('agent', this.agentList);
    this.getData('types', this.typeList);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
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

  getData(document: string, list: List[]) {
    return this.crud.getDocument(document).subscribe((data: any) => {
      Object.keys(data).map(function (e) {
        const subArray = {
          id: e,
          item: data[e],
        };
        list.push(subArray);
      });
    });
  }

  onChange(newObj: any) {
    this.hideoutsList = [];
    this.arrayList = [];
    for (var i = 0; i < this.countriesList.length; i++) {
      if (newObj === this.countriesList[i].item.name) {
        this.hideoutsList.push(this.countriesList[i].item.capital);
        for (var j = 0; j < this.contactList.length; j++) {
          if (
            this.countriesList[i].id === this.contactList[j].item.nationalityId
          ) {
            console.log(this.contactList[j].item.callsign);
            this.arrayList.push(this.contactList[j].item.callsign);
          }
        }
      }
    }
  }

  onSelectTarget(newObj: any) {
    for (var i = 0; i < this.targetList.length; i++) {
      if (newObj === this.targetList[i].item.nationlityId) {
      }
    }
  }

  delete(id: string | null) {
    this.crud.deleteAgent(id);
  }
}
