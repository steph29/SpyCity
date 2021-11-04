import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

const auth = getAuth();
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }
}
