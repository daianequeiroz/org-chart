import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC_35-cCITLnrbzlA3HmQBdA0YiIkmOHMU',
  authDomain: 'org-chart-85a9a.firebaseapp.com',
  databaseURL: 'https://org-chart-85a9a.firebaseio.com',
  projectId: 'org-chart-85a9a',
  storageBucket: 'org-chart-85a9a.appspot.com',
  messagingSenderId: '697873283480',
  appId: '1:697873283480:web:fcde355ac4872c140a93ed',
  measurementId: 'G-Z7TZGCT3C2'
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Set Firebase Resources
const firestoreDB = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { firestoreDB, storage };
