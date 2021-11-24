import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mission } from 'src/app/models/mission';
import { CrudService } from 'src/app/shared/crud.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from 'src/app/models/person';

export interface List {
  id: string;
  item: string;
}
@Component({
  selector: 'app-update-mission',
  templateUrl: './update-mission.component.html',
  styleUrls: ['./update-mission.component.css'],
})
export class UpdateMissionComponent implements OnInit {
  id = '';
  setOfMission: [Mission[]] = [[]];
  mission: Mission[] = [];

  countriesList: List[] = [];
  targetList: List[] = [];
  agentList: List[] = [];
  specialitiesList: List[] = [];
  contactList: List[] = [];
  statusList: List[] = [];
  hideoutsList: List[] = [];
  typeList: List[] = [];

  updateMissionForm = new FormGroup({
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private crud: CrudService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.crud.getMission();
    // .subscribe((data) => {
    //   this.getMission(data);
    // });

    this.getData('target', 'callsign', this.targetList);
    this.getData('countries', 'name', this.countriesList);
    this.getData('contact', 'callsign', this.contactList);
    this.getData('specialities', 'name', this.specialitiesList);
    this.getData('status', 'state', this.statusList);
    this.getData('agent', 'callsign', this.agentList);
    this.getData('countries', 'capital', this.hideoutsList);
    this.getData('types', 'name', this.typeList);
  }

  getMission(data: any) {
    const dataDisplay: any = [];
    // On recupère l'ID passé en URL
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
    const dataArray: any = [];
    for (var i = 0; i < Object.keys(data).length; i++) {
      if (Object.keys(data)[i] === this.id) {
        const dataMission = Object.values(data)[i];
        dataArray.push(dataMission);
      }
      this.mission = dataArray;
    }
    this.setOfMission = dataArray;
  }

  updateMission() {
    const agent =
      this.updateMissionForm.get('agent')?.value === ''
        ? this.mission[0].agent
        : this.updateMissionForm.get('agent')?.value;
    const codeName =
      this.updateMissionForm.get('codeName')?.value === ''
        ? this.mission[0].codeName
        : this.updateMissionForm.get('codeName')?.value;

    const contact =
      this.updateMissionForm.get('contact')?.value === ''
        ? this.mission[0].contact
        : this.updateMissionForm.get('contact')?.value;
    const country =
      this.updateMissionForm.get('country')?.value === ''
        ? this.mission[0].country
        : this.updateMissionForm.get('country')?.value;
    const desc =
      this.updateMissionForm.get('desc')?.value === ''
        ? this.mission[0].desc
        : this.updateMissionForm.get('desc')?.value;
    const endDate =
      this.updateMissionForm.get('endDate')?.value === ''
        ? this.mission[0].endDate
        : this.updateMissionForm.get('endDate')?.value;
    const hideouts =
      this.updateMissionForm.get('hideouts')?.value === ''
        ? this.mission[0].hideouts
        : this.updateMissionForm.get('hideouts')?.value;
    const mission =
      this.updateMissionForm.get('mission')?.value === ''
        ? this.mission[0].mission
        : this.updateMissionForm.get('mission')?.value;
    const specialities =
      this.updateMissionForm.get('specialities')?.value === ''
        ? this.mission[0].specialities
        : this.updateMissionForm.get('specialities')?.value;
    const startDate =
      this.updateMissionForm.get('startDate')?.value === ''
        ? this.mission[0].startDate
        : this.updateMissionForm.get('startDate')?.value;
    const status =
      this.updateMissionForm.get('status')?.value === ''
        ? this.mission[0].status
        : this.updateMissionForm.get('status')?.value;
    const target =
      this.updateMissionForm.get('target')?.value === ''
        ? this.mission[0].target
        : this.updateMissionForm.get('target')?.value;
    const type =
      this.updateMissionForm.get('type')?.value === ''
        ? this.mission[0].type
        : this.updateMissionForm.get('type')?.value;

    this.crud.updateMission(
      this.id,
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
