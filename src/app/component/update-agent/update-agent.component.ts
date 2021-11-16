import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';
import { Person } from '../../models/person';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

const app = initializeApp(environment.firebaseConfig);

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css'],
})
export class UpdateAgentComponent implements OnInit {
  id = '';
  submitted = false;
  compagny: [Person[]] = [[]];
  agent: Person[] = [];

  typePerson = [
    { id: 1, type: 'agent' },
    { id: 2, type: 'contact' },
    { id: 3, type: 'target' },
  ];

  updatePersonForm = new FormGroup({
    type: new FormControl(''),
    lname: new FormControl(''),
    fname: new FormControl(''),
    callsign: new FormControl(''),
    birthday: new FormControl(''),
    nationalityId: new FormControl(''),
    specialities: new FormControl(''),
  });

  constructor(
    private crud: CrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.crud.getAgent().subscribe((data) => {
      this.getAgents(data);
      this.getId();
      for (var i = 0; i < this.compagny.length; i++) {
        if (this.compagny[i]['id'] === this.id) {
          this.agent = this.compagny[i];
          console.log(this.agent);
        }
      }
    });
  }

  // Recuperation de tous les agenst en vude comparer les id
  getAgents(data: any) {
    const dataDisplay: any = [];
    Object.keys(data).map(function (e: string) {
      const agents = {
        id: e,
        lname: data[e]['lname'],
        fname: data[e]['fname'],
        callsign: data[e]['callsign'],
        birthday: data[e]['birthday'],
        nationalityId: data[e]['nationalityId'],
        specialities: data[e]['specialities'],
      };
      dataDisplay.push(agents);
    });
    this.compagny = dataDisplay;
  }

  // Get ID passé en URL
  getId() {
    return this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  // Update agent en fct des valeurs envoyées
  updatePerson(id: string) {
    const type =
      this.updatePersonForm.get('type')?.value === ''
        ? this.agent['type']
        : this.updatePersonForm.get('type')?.value;
    const lname =
      this.updatePersonForm.get('lname')?.value === ''
        ? this.agent['lname']
        : this.updatePersonForm.get('lname')?.value;
    const fname =
      this.updatePersonForm.get('fname')?.value === ''
        ? this.agent['fname']
        : this.updatePersonForm.get('fname')?.value;
    const callsign =
      this.updatePersonForm.get('callsign')?.value === ''
        ? this.agent['callsign']
        : this.updatePersonForm.get('callsign')?.value;
    const birthday =
      this.updatePersonForm.get('birthday')?.value === ''
        ? this.agent['birthday']
        : this.updatePersonForm.get('birthday')?.value;
    const nationalityId =
      this.updatePersonForm.get('nationalityId')?.value === ''
        ? this.agent['nationalityId']
        : this.updatePersonForm.get('nationalityId')?.value;
    const specialities =
      this.updatePersonForm.get('specialities')?.value === ''
        ? this.agent['specialities']
        : this.updatePersonForm.get('specialities')?.value;

    this.crud
      .updateAgent(
        this.id,
        type,
        lname,
        fname,
        callsign,
        birthday,
        nationalityId,
        specialities
      )
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigate(['/admin']);
  }

  // Select Dropdown error handling
  public handleError = (controlName: string, errorName: string) => {
    return this.updatePersonForm.controls[controlName].hasError(errorName);
  };
}
