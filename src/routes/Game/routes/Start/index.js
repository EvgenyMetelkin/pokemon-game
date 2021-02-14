import { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom';

import LayoutBlock from '../../../../components/LayoutBlock/';
import PokemonCard from '../../../../components/PokemonCard/';
 
import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';

import s from  './style.module.css';

const StartPage = () => {
    const history = useHistory();
    const firebase = useContext(FireBaseContext);
    const pokemonsContext = useContext(PokemonContext);
    const [pokemons, setPokemons] = useState({});  

    useEffect(() => {
      pokemonsContext.onClearContext();

      // console.log("START");
      // console.log(pokemonsContext.selectedPokemons);

      firebase.getPokemonsSoket((pokemons) => {
        setPokemons(pokemons);
      }); 
      
      return () => firebase.offPokemonsSoket();
    }, []);

    const cardClick = (key) => {   
      const pokemon = {...pokemons[key]};
      pokemonsContext.onSetPokemon(key, pokemon);

      setPokemons(prevState => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          isSelected: !prevState[key].isSelected
        }        
      }));
 
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
      history.push(pokemonsContext.path + "/board");
    };

    return (
        <> 
            <button 
              className={s.button} 
              onClick={startGame}
              disabled={Object.keys(pokemonsContext.selectedPokemons).length !== 5}
            > 
              Start Game 
            </button>
            <LayoutBlock 
              id = "secondLayout" 
              title = "Second"  
              colorBg = "#c6f5f0"
            >
              <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, {id, name, img, type, values, isSelected}]) =>  
                      <PokemonCard  
                        className={s.card}               
                        key={key} 
                        id={id} 
                        name={name} 
                        img={img} 
                        type={type} 
                        values={values}      
                        isActive={true}
                        isSelected={isSelected}
                        onClickCard={() => {
                          if(Object.keys(pokemonsContext.selectedPokemons).length < 5 || isSelected) {
                            cardClick(key);
                          }
                        }}        
                      />
                    )
                }  
              </div>  
            </LayoutBlock> 
        </>
    );
};

export default StartPage