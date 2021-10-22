import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  dashboardMenu = [
    {
      dashboardName: 'Mission',
      dashboardUrl: '',
    },
    {
      dashboardName: 'Login',
      dashboardUrl: 'login',
    },
    {
      dashboardName: 'Register',
      dashboardUrl: 'register',
    },
    {
      dashboardName: 'Admin',
      dashboardUrl: 'admin',
    },
    {
      dashboardName: 'Logout',
      dashboardUrl: 'logout',
    },
    {
      dashboardName: 'Contact',
      dashboardUrl: 'contact',
    },
  ];

  constructor(private authService: AuthService) {}

  isAuth() {}

  ngOnInit() {}

  onSignOut() {}
}
