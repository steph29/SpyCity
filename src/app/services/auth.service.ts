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
onAuthStateChanged(auth, (user) => {
  console.log(user);
});

export class AuthService {
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
          resolve(auth);
        })
        .catch((error) => {
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
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // L'utilisateur est connecté -> accès à l'espace admin , changement de la navbar
          // ...
        } else {
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
