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

  missions = [
    { id: 1, mission: 'mission1' },
    { id: 2, mission: 'mission2' },
    { id: 3, mission: 'mission3' },
  ];
  agents = [
    { id: 1, agent: 'agent1' },
    { id: 2, agent: 'agent2' },
    { id: 3, agent: 'agent3' },
  ];
  constructor(private httpClient: HttpClient, public crud: CrudService) {}

  ngOnInit() {}

  // Sert à lire un agent pour le test
  onWrite() {
    // Cette fonction doit pouvoir mettre à jour les données sur la mission
    // -> Ouvre une page vers updateMission -> recupere les nouvelles données -> Mettre à jour dans Firebase -> refermer cette fenetre -> mettre à jour
    // l'affichage
    console.log();

    this.crud.getMission();
  }

  onTestClick() {}

  // Sert à inserer une mission
}
