import { Component, OnInit } from '@angular/core';

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
      dashboardName: 'Admin',
      dashboardUrl: 'admin',
    },
    {
      dashboardName: 'Logout',
      dashboardUrl: 'logout',
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
      dashboardName: 'Contact',
      dashboardUrl: 'contact',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
