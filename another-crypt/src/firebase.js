import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBdG04ptRnjPNofTnsEXzsocrZdnzaGvr8',
  authDomain: 'another-one-8de2d.firebaseapp.com',
  databaseURL: 'https://another-one-8de2d.firebaseio.com',
  projectId: 'another-one-8de2d',
  storageBucket: 'another-one-8de2d.appspot.com',
  messagingSenderId: '586151888331',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
