import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { environment } from 'src/environments/environment';

const app = initializeApp(environment.firebaseConfig);
const auth = getAuth(app);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  email: string = '';
  password: string = '';

  constructor() {}

  createNewUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // signIn
          resolve(auth);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          reject(error);
          // ...
        });
    });
  }

  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // User is connected
          resolve(auth);
          sessionStorage.setItem('auth', JSON.stringify(auth.currentUser?.uid));
          sessionStorage.getItem('auth');
        })
        .catch((error) => {
          // User isn't connected
          const errorCode = error.code;
          const errorMessage = error.message;
          reject(error);
        });
    });
  }

  onChangeUserState() {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          this.userData = user;
          sessionStorage.setItem('auth', JSON.stringify(uid));
          sessionStorage.getItem('auth');
          // L'utilisateur est connecté -> accès à l'espace admin , changement de la navbar

          // ...
        } else {
          sessionStorage.setItem('auth', 'null');
          sessionStorage.getItem('auth');
          // User is signed out
          // deconnection -> Retour de la navbar de base, redirection vers la page login
          // ...
        }
      });
    });
  }

  signOut() {
    return new Promise((resolve, reject) => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          sessionStorage.removeItem('auth');

          resolve(auth);
        })
        .catch((error) => {
          // An error happened.
          reject(error);
        });
    });
  }

  loggedIn() {
    return !!auth.currentUser;
  }
}
