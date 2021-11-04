import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/shared/crud.service';

const app = initializeApp(environment.firebaseConfig);

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  person = {
    type: 'Agent',
    name: 'Pan',
    firstname: 'Peter',
    callsign: 'Hey Peeeteer',
    birthday: '27 / 08 / 1987',
    nationality: 14,
    speciality: 5,
  };

  constructor(private httpClient: HttpClient, public crud: CrudService) {}

  ngOnInit() {}

  // Sert à lire un agent pour le test
  onWrite() {
    this.crud.addAgent(
      this.person.type,
      this.person.name,
      this.person.firstname,
      this.person.callsign,
      this.person.birthday,
      this.person.nationality,
      [this.person.speciality]
    );
  }

  onTestClick() {}

  // Sert à inserer une mission
}
