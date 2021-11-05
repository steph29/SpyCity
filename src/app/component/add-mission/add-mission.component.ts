import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';
import { AuthService } from 'src/app/services/auth.service';
import { Person } from '../../models/person';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

const app = initializeApp(environment.firebaseConfig);

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css'],
})
export class AddMissionComponent implements OnInit {
  submitted = false;
  private persons: Person[] = [];
  private personsUpdated = new Subject<Person[]>();
  private document: string = '';

  typePerson = [
    { id: 1, type: 'agent' },
    { id: 2, type: 'contact' },
    { id: 3, type: 'target' },
  ];

  addMissionForm = new FormGroup({
    type: new FormControl(''),
    name: new FormControl(''),
    firstname: new FormControl(''),
    callsign: new FormControl(''),
    birthday: new FormControl(''),
    nationalityId: new FormControl(''),
    specialityId: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private crud: CrudService,
    private router: Router,
    private auth: AuthService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    const addMissionForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      name: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      callsign: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      nationalityId: ['', [Validators.required]],
      specialityId: ['', [Validators.required]],
    });
  }

  addNewMission() {
    const type = this.addMissionForm.get('type')?.value;
    const name = this.addMissionForm.get('name')?.value;
    const firstname = this.addMissionForm.get('firstname')?.value;
    const callsign = this.addMissionForm.get('callsign')?.value;
    const birthday = this.addMissionForm.get('birthday')?.value;
    const nationalityId = this.addMissionForm.get('nationalityId')?.value;
    const specialityId = this.addMissionForm.get('specialityId')?.value;

    this.addAgent(
      type,
      name,
      firstname,
      callsign,
      birthday,
      nationalityId,
      specialityId
    );
    this.addMissionForm.reset();
    this.router.navigate(['/admin']);
  }

  // HttpClient API post() => create Agent
  addAgent(
    type: string,
    name: string,
    firstname: string,
    callsign: string,
    birthday: string,
    nationalityId: number,
    specialityId: [number]
  ) {
    const person: Person = {
      type: type,
      name: name,
      firstname: firstname,
      callsign: callsign,
      birthday: birthday,
      nationalityId: nationalityId,
      specialityId: specialityId,
    };

    this.httpClient
      .post<{ message: string }>(
        app.options.databaseURL + '/' + type + '.json',
        person
      )
      .subscribe(() => {
        this.persons.push(person);
        this.personsUpdated.next([...this.persons]);
      });
  }
  // Select Dropdown error handling
  public handleError = (controlName: string, errorName: string) => {
    return this.addMissionForm.controls[controlName].hasError(errorName);
  };
}
