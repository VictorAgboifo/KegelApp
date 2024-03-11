import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private firestore: Firestore) { }

  signUp(email: string, password: string) {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors
      });
  }

  listenForAuthChanges() {
    const auth = getAuth();
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
      } else {
        // User is signed out
      }
    });
  }
}
