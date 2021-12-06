import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  constructor(private httpClient: HttpClient) {}

  makeMarkers(map: L.Map): void {}
}
