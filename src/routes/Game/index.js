import { useState, useEffect } from 'react';

import LayoutBlock from '../../components/LayoutBlock/';
import PokemonCard from '../../components/PokemonCard/';

import database from '../../service/firebase';

import s from  './style.module.css';

const NEWPOKENON = {
  "abilities": [
    "keen-eye",
    "tangled-feet",
    "big-pecks"
  ],
  "stats": {
    "hp": 63,
    "attack": 60,
    "defense": 55,
    "special-attack": 50,
    "special-defense": 50,
    "speed": 71
  },
  "type": "flying",
  "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
  "name": "pidgeotto",
  "base_experience": 122,
  "height": 11,
  "id": 17,
  "values": {
    "top": "A",
    "right": 2,
    "bottom": 7,
    "left": 5
  }
};

const GamePage = () => {
    const [pokemons, setPokemons] = useState({}); 

    useEffect(() => {
      database.ref('pokemons').once('value', (snapshot) => {
        setPokemons(snapshot.val());
      });
    }, []);

    const cardClick = (id) => { 
      setPokemons(prevState => {
        return Object.entries(prevState).reduce((acc, item) => {
            const pokemon = {...item[1]};
            if (pokemon.id === id) {
                pokemon.active = !pokemon.active;
 
                database.ref('pokemons/'+ item[0]).set({
                  ...pokemon
                });
            }
    
            acc[item[0]] = pokemon;
    
            return acc;
        }, {});
    });
    };   
    
    const addNewPokemon = () => {
      const newKey = database.ref().child('pokemons').push().key;

      let newId = Math.floor(Math.random() * 100);
      while (checkingForSimilarId(newId)) {
        newId = Math.floor(Math.random() * 100);
      } 
 
      let newPokemon = NEWPOKENON;
      newPokemon.id = newId;
       
      database.ref('pokemons/' + newKey).set(newPokemon, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Data saved successfully!");
        }
      });

      database.ref('pokemons').once('value', (snapshot) => {
        setPokemons(snapshot.val());
      });
    };

    const checkingForSimilarId = ( id ) => {
      let isSimilarId = false;
      Object.entries(pokemons).forEach((item) => {  
        if(item[1].id === id) {
          isSimilarId = true;
        }
      });

      return isSimilarId;
    };

    return (
        <> 
            <button className={s.button} onClick={addNewPokemon}> ADD NEW POKEMON </button>
            <LayoutBlock 
              id = "secondLayout" 
              title = "Second"  
              colorBg = "#c6f5f0"
            >
              <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, {id, name, img, type, values, active}]) =>  
                      <PokemonCard                 
                        key={key} 
                        id={id} 
                        name={name} 
                        img={img} 
                        type={type} 
                        values={values}      
                        isActive={active}
                        onClickCard={cardClick}         
                      />
                    )
                }  
              </div>  
            </LayoutBlock> 
        </>
    );
};

export default GamePage