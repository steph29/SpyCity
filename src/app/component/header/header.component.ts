import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSignOut() {}
}
