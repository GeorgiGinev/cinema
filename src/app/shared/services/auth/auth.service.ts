import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../../resources/user/user';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userData: any;

  // Returns true when user is looged in and email is verified
  public get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.saveDataToLocalstoreWhenSignIn();
  }

  /**
   * Sign in method
   */
  public signIn(email: string, password: string): Promise<any> {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['dashboard']);

        this.setUserData(result.user).then(
          () => {},
          () => {}
        );
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  /**
   * Sign up method
   * @param email string
   * @param password string
   */
  public signUp(email: string, password: string): Promise<any> {
    return this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('result : ', result);
        /* Call the SendVerificaitonMail() function when new user sign 
      up and returns promise */
        this.sendVerificationMail().then(
          () => {},
          () => {}
        );

        this.setUserData(result.user).then(
          () => {},
          () => {}
        );
      })
      .catch((error) => {
        console.error('error : ', error);
      });
  }

  /**
   * Send password reset email
   * @param email string
   * @returns
   */
  public forgottenPassword(email: string): Promise<any> {
    return this.angularFireAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /**
   * Sign in with Google method
   */
  public signInWithGoogle(): Promise<any> {
    return this.authSignIn(new auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
        this.router.navigate(['dashboard']);
      }
    });
  }

  /**
   * Auth sign in
   */
  private authSignIn(provider: any): Promise<any> {
    return this.angularFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['dashboard']);
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /**
   * Setting up user data when sign in with username/password,
   * sign up with username/password and sign in with social auth
   * provider in Firestore database using AngularFirestore + AngularFirestoreDocument service
   */
  private setUserData(user: any): Promise<any> {
    const userRef: AngularFirestoreDocument<any> = this.angularFireStore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  /**
   * Send verification email
   * @returns
   */
  private sendVerificationMail(): Promise<any> {
    return this.angularFireAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        return this.router.navigate(['verify-email-address']);
      });
  }

  /**
   * Add listener
   */
  private saveDataToLocalstoreWhenSignIn() {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
}
