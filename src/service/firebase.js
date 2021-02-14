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

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } 

    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonsSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    });
  }

  offPokemonsSoket = () => {
    this.database.ref('pokemons').off();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data, (error) => {
      if (error) {
        console.log(error);
      } 
    });
  }
}

export default Firebase;