// lib/authentication.ts

import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from 'firebase/auth';

/**
 * Sign up user using Firebase Auth
 * @param email - user email
 * @param password - user password
 * @param fullName - full name for profile
 */
export const signUpWithEmail = async (
  email: string,
  password: string,
  fullName: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Optional: update user's display name
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: fullName,
      });
    }

    return { user };
  } catch (error: any) {
    console.error('Error during sign-up:', error);
    throw new Error(error.message);
  }
};

/**
 * Login user with email and password
 * @param email - user email
 * @param password - user password
 */
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error: any) {
    console.error('Login error:', error);
    throw new Error(error.message);
  }
};

/**
 * Sign in using Google account
 */
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return { user: result.user };
  } catch (error: any) {
    console.error('Google sign-in error:', error);
    throw new Error(error.message);
  }
};

/**
 * Logout current user
 */
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error('Logout error:', error);
    throw new Error(error.message);
  }
};
