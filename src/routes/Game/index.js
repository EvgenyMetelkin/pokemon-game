import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

import {PokemonContext} from '../../context/pokemonContext';

const GamePage = () => {
  const match = useRouteMatch();
  const[selectedPokemons, setSelectedPokemon] = useState({});
  const[player1Pokemons, setPlayer1Pokemons] = useState({});
  const[player2Pokemons, setPlayer2Pokemons] = useState({}); 
 
  const handleSetPokemon = (key, pokemon) => { 
    setSelectedPokemon(prevState => { 
      if(prevState[key]) {
        const copyState = {...prevState};
        delete copyState[key];

        return copyState;
      }
      return {
        ...prevState,
        [key]: pokemon
      };
    });  
  };

  const handleonSetPokemons2Players = (pokemonsPlayer1, pokemonsPlayer2) => {
    setPlayer1Pokemons(pokemonsPlayer1);
    setPlayer2Pokemons(pokemonsPlayer2);
  }; 

  const handleClearContext = () => {
    setSelectedPokemon({});
    setPlayer1Pokemons({});
    setPlayer2Pokemons({}); 
  };

  return (
    <PokemonContext.Provider value={{
      selectedPokemons,
      onSetPokemon: handleSetPokemon,
      onSetPokemons2Players: handleonSetPokemons2Players, 
      player1Pokemons,
      player2Pokemons,
      path: match.path,
      onClearContext: handleClearContext
      }}>
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage