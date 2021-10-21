import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ContactComponent } from './component/contact/contact.component';
import { AdminComponent } from './component/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

const firebaseConfig = {
  apiKey: 'AIzaSyBLKlKbv3DxfmtGxAwAU1zU-nUjcr5dXEc',
  authDomain: 'spyfield-b2064.firebaseapp.com',
  databaseURL:
    'https://spyfield-b2064-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'spyfield-b2064',
  storageBucket: 'spyfield-b2064.appspot.com',
  messagingSenderId: '232064703995',
  appId: '1:232064703995:web:7d35341c2079e173c5ff5e',
  measurementId: 'G-Q8J5LRZSDT',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
