import { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom';

import LayoutBlock from '../../../../components/LayoutBlock/';
import PokemonCard from '../../../../components/PokemonCard/';
 
import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';

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

const StartPage = () => {
    const history = useHistory();
    const firebase = useContext(FireBaseContext);
    const pokemonsContext = useContext(PokemonContext);
    const [pokemons, setPokemons] = useState({});  

    useEffect(() => {
      firebase.getPokemonsSoket((pokemons) => {
        setPokemons(pokemons);
      });  
    }, []);

    const cardClick = (id) => {   

      setPokemons(prevState => {
        return Object.entries(prevState).reduce((acc, item) => {
            const pokemon = {...item[1]};
            if (pokemon.id === id) {
                pokemon.isSelected = true;  
            }
    
            acc[item[0]] = pokemon;
     
            return acc;
        }, {});
      });
 
    //   setPokemons(prevState => {
    //     return Object.entries(prevState).reduce((acc, item) => {
    //         const pokemon = {...item[1]};
    //         if (pokemon.id === id) {
    //             pokemon.active = !pokemon.active; 
    //         }
    
    //         acc[item[0]] = pokemon;

    //         firebase.postPokemon(item[0], pokemon);
    
    //         return acc;
    //     }, {});
    // });
    };   
     
    const startGame = () => {
      let selectedPokemons = [];
      Object.entries(pokemons).forEach((item) => {   
          if (item[1].isSelected) {
            selectedPokemons.push(item[1]);
          }          
      });   
      pokemonsContext.onSetPokemons(selectedPokemons); 

      history.push(pokemonsContext.path + "/board");
    };

    return (
        <> 
            <button className={s.button} onClick={startGame}> Start Game </button>
            <LayoutBlock 
              id = "secondLayout" 
              title = "Second"  
              colorBg = "#c6f5f0"
            >
              <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, {id, name, img, type, values, isSelected}]) =>  
                      <PokemonCard                 
                        key={key} 
                        id={id} 
                        name={name} 
                        img={img} 
                        type={type} 
                        values={values}      
                        isActive={true}
                        isSelected={isSelected}
                        onClickCard={cardClick}        
                      />
                    )
                }  
              </div>  
            </LayoutBlock> 
        </>
    );
};

export default StartPage