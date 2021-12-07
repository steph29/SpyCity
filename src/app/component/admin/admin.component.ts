import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/shared/crud.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
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
  alert: boolean = false;
  alertContact: boolean = false;

  countriesList: List[] = [];
  targetList: List[] = [];
  agentList: List[] = [];
  specialitiesList: List[] = [];
  contactList: List[] = [];
  statusList: List[] = [];
  hideoutsList: List[] = [];
  typeList: List[] = [];
  arrayList: List[] = [];
  agentListArray: List[] = [];
  agentSpeList: List[] = [];

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
    this.getData('agent', this.agentList);
    this.getData('status', this.statusList);
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
      if (newObj === this.countriesList[i].id) {
        const hideoutsObj = {
          id: this.countriesList[i].id,
          item: this.countriesList[i].item.capital,
        };
        this.hideoutsList.push(hideoutsObj);
        for (var j = 0; j < this.contactList.length; j++) {
          if (
            this.countriesList[i].id === this.contactList[j].item.nationalityId
          ) {
            const contactObj = {
              id: this.contactList[j].id,
              item: this.contactList[j].item.callsign,
            };
            this.arrayList.push(contactObj);
          }
        }
      }
    }
    if (this.arrayList.length === 0) {
      this.alertContact = true;
    }
  }

  onSelectTarget(newObj: any) {
    console.log(newObj);

    this.agentListArray = [];
    for (var i = 0; i < this.targetList.length; i++) {
      if (newObj === this.targetList[i].id) {
        for (var j = 0; j < this.agentList.length; j++) {
          if (
            this.agentList[j].item.nationalityId !==
            this.targetList[i].item.nationalityId
          ) {
            this.agentListArray.push(this.agentList[j]);
          }
        }
      }
    }
    return this.agentListArray;
  }

  SpecialitiesHandle(newObj: any) {
    const indexArray: any = [];
    this.agentSpeList = [];
    for (var i = 0; i < this.specialitiesList.length; i++) {
      if (newObj === this.specialitiesList[i].id) {
        indexArray.push(this.specialitiesList[i].id);
      }
    }
    console.log(indexArray);
    console.log(this.agentListArray);
    this.agentListArray.forEach((element) => {
      if (element.item.specialities[0] === indexArray[0]) {
        const agentObj = {
          id: element.id,
          item: element.item.callsign,
        };
        console.log(element.item.callsign);
        this.agentSpeList.push(agentObj);
      }
    });
    if (this.agentSpeList.length === 0) {
      this.alert = true;
    }
  }

  delete(id: string | null) {
    this.crud.deleteAgent(id);
  }

  closeAlert() {
    this.alert = false;
  }
}
