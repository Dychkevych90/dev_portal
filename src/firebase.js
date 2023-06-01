// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJHfEBVv3xmdIYYqpeB_4FYM2ecck5TjY',
  authDomain: 'dev-portal-5dbdc.firebaseapp.com',
  projectId: 'dev-portal-5dbdc',
  storageBucket: 'dev-portal-5dbdc.appspot.com',
  messagingSenderId: '517909961852',
  appId: '1:517909961852:web:893494c3dd5bb0cb317df9',
  measurementId: 'G-2CYG3DYKV9',
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics( app );

export default app;
