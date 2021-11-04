import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css'],
})
export class AddMissionComponent implements OnInit {
  submitted = false;
  typePerson = [
    { id: 1, type: 'Agent' },
    { id: 2, type: 'Contact' },
    { id: 3, type: 'Target' },
  ];

  addMissionForm = new FormGroup({
    type: new FormControl(''),
    name: new FormControl(''),
    firstname: new FormControl(''),
    callsign: new FormControl(''),
    birthday: new FormControl(''),
    nationality: new FormControl(''),
    speciality: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private crud: CrudService,
    private router: Router
  ) {}

  ngOnInit() {
    const loginForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      name: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      callsign: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      speciality: ['', [Validators.required]],
    });
  }
  // Select Dropdown error handling
  public handleError = (controlName: string, errorName: string) => {
    return this.addMissionForm.controls[controlName].hasError(errorName);
  };

  addNewMission() {
    this.submitted = true;
    const type = this.addMissionForm.get('type')?.value;
    const name = this.addMissionForm.get('name')?.value;
    const firstname = this.addMissionForm.get('firstname')?.value;
    const callsign = this.addMissionForm.get('callsign')?.value;
    const birthday = this.addMissionForm.get('birthday')?.value;
    const nationality = this.addMissionForm.get('nationality')?.value;
    const speciality = this.addMissionForm.get('speciality')?.value;

    this.crud.addAgent(
      type,
      name,
      firstname,
      callsign,
      birthday,
      nationality,
      speciality
    );
    this.addMissionForm.reset();
    this.router.navigate(['/admin']);
  }
}
