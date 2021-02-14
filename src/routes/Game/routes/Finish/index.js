import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { PokemonContext } from '../../../../context/pokemonContext';
import { FireBaseContext } from '../../../../context/firebaseContext';

import FinishBoard from '../../../../components/FinishBoard';

import s from './style.module.css';

const FinishPage = () => {
    const [choiceCard, setChoiceCard] = useState(null);

    const pokemonsContext = useContext(PokemonContext);
    const firebase = useContext(FireBaseContext);

    const history = useHistory(); 
    if(Object.keys(pokemonsContext.selectedPokemons).length < 5) {
        history.push('/game');
    } 

    const endGame = () => { 
        firebase.addPokemon(choiceCard);
        history.push('/game');
    };

    return (
        <div className={s.root}>
		    <div className={s.playerOne}>
            {
                <FinishBoard 
                    cards={pokemonsContext.player1Pokemons}  
                /> 
            }
            </div>            
            <button 
              className={s.button} 
              onClick={endGame}
              disabled={!choiceCard}
            > 
              End Game
            </button>   
            <div className={s.playerOne}>
            {
                <FinishBoard 
                    useSelect
                    cards={pokemonsContext.player2Pokemons} 
                    onClickCard={(card) => setChoiceCard(card)}
                /> 
            }
            </div>
        </div>
    ); 
};

export default FinishPage