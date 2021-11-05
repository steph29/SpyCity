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
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css'],
})
export class AddAgentComponent implements OnInit {
  submitted = false;
  private persons: Person[] = [];
  private personsUpdated = new Subject<Person[]>();

  typePerson = [
    { id: 1, type: 'agent' },
    { id: 2, type: 'contact' },
    { id: 3, type: 'target' },
  ];

  addPersonForm = new FormGroup({
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
    const addPersonForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      name: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      callsign: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      nationalityId: ['', [Validators.required]],
      specialityId: ['', [Validators.required]],
    });
  }

  addNewPerson() {
    const type = this.addPersonForm.get('type')?.value;
    const name = this.addPersonForm.get('name')?.value;
    const firstname = this.addPersonForm.get('firstname')?.value;
    const callsign = this.addPersonForm.get('callsign')?.value;
    const birthday = this.addPersonForm.get('birthday')?.value;
    const nationalityId = this.addPersonForm.get('nationalityId')?.value;
    const specialityId = this.addPersonForm.get('specialityId')?.value;

    this.crud.addAgent(
      type,
      name,
      firstname,
      callsign,
      birthday,
      nationalityId,
      specialityId
    );
    this.addPersonForm.reset();
    this.router.navigate(['/admin']);
  }

  // Select Dropdown error handling
  public handleError = (controlName: string, errorName: string) => {
    return this.addPersonForm.controls[controlName].hasError(errorName);
  };
}
