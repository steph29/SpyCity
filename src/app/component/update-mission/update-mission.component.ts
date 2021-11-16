import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mission } from 'src/app/models/mission';
import { CrudService } from 'src/app/shared/crud.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-mission',
  templateUrl: './update-mission.component.html',
  styleUrls: ['./update-mission.component.css'],
})
export class UpdateMissionComponent implements OnInit {
  id = '';
  setOfMission: [Mission[]] = [[]];
  mission: Mission[] = [];

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
    this.crud.getMission().subscribe((data) => {
      this.getMission(data);
      this.getId();
      for (var i = 0; i < this.setOfMission.length; i++) {
        if (this.setOfMission[i]['id'] === this.id) {
          this.mission = this.setOfMission[i];
          console.log(this.mission);
        }
      }
    });
  }

  getMission(data: any) {
    const dataArray: any = [];
    Object.keys(data).map(function (e) {
      const mission = {
        id: e,
        agent: [data[e]['agent']],
        codeName: data[e]['codeName'],
        contact: [data[e]['contact']],
        country: data[e]['country'],
        desc: data[e]['desc'],
        endDate: data[e]['endDate'],
        hideouts: [data[e]['hideouts']],
        mission: data[e]['mission'],
        specialities: data[e]['specialities'],
        startDate: data[e]['startDate'],
        status: data[e]['status'],
        target: data[e]['target'],
        type: data[e]['type'],
      };
      dataArray.push(mission);
    });
    this.setOfMission = dataArray;
  }

  getId() {
    return this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  updateMission(id: string) {
    const agent =
      this.updateMissionForm.get('agent')?.value === ''
        ? this.mission['agent']
        : this.updateMissionForm.get('agent')?.value;
    const codeName =
      this.updateMissionForm.get('codeName')?.value === ''
        ? this.mission['codeName']
        : this.updateMissionForm.get('codeName')?.value;

    const contact =
      this.updateMissionForm.get('contact')?.value === ''
        ? this.mission['contact']
        : this.updateMissionForm.get('contact')?.value;
    const country =
      this.updateMissionForm.get('country')?.value === ''
        ? this.mission['country']
        : this.updateMissionForm.get('country')?.value;
    const desc =
      this.updateMissionForm.get('desc')?.value === ''
        ? this.mission['desc']
        : this.updateMissionForm.get('desc')?.value;
    const endDate =
      this.updateMissionForm.get('endDate')?.value === ''
        ? this.mission['endDate']
        : this.updateMissionForm.get('endDate')?.value;
    const hideouts =
      this.updateMissionForm.get('hideouts')?.value === ''
        ? this.mission['hideouts']
        : this.updateMissionForm.get('hideouts')?.value;
    const mission =
      this.updateMissionForm.get('mission')?.value === ''
        ? this.mission['mission']
        : this.updateMissionForm.get('mission')?.value;
    const specialities =
      this.updateMissionForm.get('specialities')?.value === ''
        ? this.mission['specialities']
        : this.updateMissionForm.get('specialities')?.value;
    const startDate =
      this.updateMissionForm.get('startDate')?.value === ''
        ? this.mission['startDate']
        : this.updateMissionForm.get('startDate')?.value;
    const status =
      this.updateMissionForm.get('status')?.value === ''
        ? this.mission['status']
        : this.updateMissionForm.get('status')?.value;
    const target =
      this.updateMissionForm.get('target')?.value === ''
        ? this.mission['target']
        : this.updateMissionForm.get('target')?.value;
    const type =
      this.updateMissionForm.get('type')?.value === ''
        ? this.mission['type']
        : this.updateMissionForm.get('type')?.value;

    this.crud
      .updateMission(
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
      )
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigate(['/admin']);
  }
}
