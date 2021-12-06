import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Mission } from 'src/app/models/mission';
import { CrudService } from 'src/app/shared/crud.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  missions: Mission[] = [];
  map!: L.Map;
  lat: number = 47.89;
  lon: number = -3.57;
  array: any = [];

  selectMission = new FormGroup({
    mission: new FormControl(''),
  });

  initMap(): void {
    this.map = L.map('map', {
      center: [this.lat, this.lon],
      zoom: 6,
    });

    const tiles = L.tileLayer(
      'https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=3e3ba58c8f764deda2f5b9bc0f25999b',
      {
        maxZoom: 18,
        minZoom: 4,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.thunderforest.com/">thunderforest</a>',
      }
    );
    tiles.addTo(this.map);
  }

  constructor(private crud: CrudService) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.crud.getMission();
    this.MapCoordinate();
    this.crud.getUpdateMission().subscribe((mission: Mission[]) => {
      this.missions = mission;
    });
  }

  MapCoordinate() {
    this.crud.getDocument('countries').subscribe((data: any) => {
      const arrayWithoutAName: any = [];
      Object.keys(data).map(function (e) {
        const Array = {
          id: e,
          item: data[e],
        };
        arrayWithoutAName.push(Array);
      });
      this.array = arrayWithoutAName;
    });
  }

  onChange(newObj: any) {
    for (var i = 0; i < this.missions.length; i++) {
      if (this.missions[i].codeName === newObj) {
        for (var j = 0; j < this.array.length; j++) {
          if (this.missions[i].countryId === this.array[j].id) {
            this.lat = this.array[j].item.latlng[0];
            this.lon = this.array[j].item.latlng[1];
            console.log(this.lat + ', ' + this.lon);
            this.map.off();
            this.map.remove();
            this.initMap();
          }
        }
      }
    }
  }
}
