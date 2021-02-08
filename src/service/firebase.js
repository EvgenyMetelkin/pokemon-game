import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC1JX9HhM4pISDOlzb8XarGwEomgj757KM",
    authDomain: "pokemon-game-d9057.firebaseapp.com",
    databaseURL: "https://pokemon-game-d9057-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-d9057",
    storageBucket: "pokemon-game-d9057.appspot.com",
    messagingSenderId: "362303931337",
    appId: "1:362303931337:web:cb4989c83437d476839e18"
  };

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;