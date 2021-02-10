import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

import {PokemonContext} from '../../context/pokemonContext';

const GamePage = () => {
  const match = useRouteMatch();

  console.log("11111", match);

  const[selectedPokemons, setSelectedPokemons] = useState([]);

  const handleSetPokemons = (pokemons) => {
    setSelectedPokemons(prevState => {
      pokemons.forEach(element => {
        prevState.push(element);
      });
      return prevState;
    });  
  };

  return (
    <PokemonContext.Provider value={{
      selectedPokemons,
      onSetPokemons: handleSetPokemons,
      path: match.path
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