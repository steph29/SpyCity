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
  agent: Person[] = [];

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
    // on recupere les agents
    this.crud.getAgent();
    // on recupere l'id passé en URL
    this.getAgents();
    // on souscrit ...
    this.crud.getUpdateAgent().subscribe((agent: Person[]) => {
      this.agent = agent;
      console.log(this.agent);

      const dataDisplay: any = [];
      for (var i = 0; i < Object.keys(this.agent).length; i++) {
        if (Object.keys(this.agent)[i] === this.id) {
          const dataAgent = Object.values(this.agent)[i];
          dataDisplay.push(dataAgent);
        }
        this.agent = dataDisplay;
      }
    });
  }

  // Recuperation de tout les agents en vu de comparer les id
  getAgents() {
    // On recupère l'ID passé en URL
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  // Update agent en fct des valeurs envoyées
  updatePerson() {
    const type = this.agent[0].type;
    const lname =
      this.updatePersonForm.get('lname')?.value === ''
        ? this.agent[0].lname
        : this.updatePersonForm.get('lname')?.value;
    const fname =
      this.updatePersonForm.get('fname')?.value === ''
        ? this.agent[0].fname
        : this.updatePersonForm.get('fname')?.value;
    const callsign =
      this.updatePersonForm.get('callsign')?.value === ''
        ? this.agent[0].callsign
        : this.updatePersonForm.get('callsign')?.value;
    const birthday =
      this.updatePersonForm.get('birthday')?.value === ''
        ? this.agent[0].birthday
        : this.updatePersonForm.get('birthday')?.value;
    const nationalityId =
      this.updatePersonForm.get('nationalityId')?.value === ''
        ? this.agent[0].nationalityId
        : this.updatePersonForm.get('nationalityId')?.value;
    const specialities =
      this.updatePersonForm.get('specialities')?.value === ''
        ? this.agent[0].specialities
        : this.updatePersonForm.get('specialities')?.value;

    this.crud.updateAgent(
      this.id,
      type,
      lname,
      fname,
      callsign,
      birthday,
      nationalityId,
      specialities
    );
    this.router.navigate(['/admin']);
  }

  // Select Dropdown error handling
  public handleError = (controlName: string, errorName: string) => {
    return this.updatePersonForm.controls[controlName].hasError(errorName);
  };
}
