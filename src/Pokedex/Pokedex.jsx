import React from 'react';

import PokeCard from '../PokeCard/PokeCard';
import classes from './Pokedex.module.css';

const Pokedex = props => {
  let gameStatus;
  if (props.isWinner) {
    gameStatus = <h1 className={classes.Pokedex_winner}>Winning Hand!</h1>;
  } else {
    gameStatus = <h1 className={classes.Pokedex_loser}>Losing Hand!</h1>;
  }

  return (
    <div className={classes.Pokedex}>
      {gameStatus}
      <h4>Total Experience: {props.exp}</h4>
      <div className={classes.Pokedex_cards}>
        {props.pokemons.map(pokemon => (
          <PokeCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
