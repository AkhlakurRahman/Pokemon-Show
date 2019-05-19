import React from 'react';

import classes from './PokeCard.module.css';

const PokeCard = props => {
  const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

  const padToThree = number =>
    number <= 999 ? `00${number}`.slice(-3) : number;

  let imgSrc = `${POKE_API}${padToThree(props.id)}.png`;

  return (
    <div className={classes.PokeCard}>
      <h1 className={classes.PokeCard_title}>{props.name}</h1>
      <div className={classes.PokeCard_img}>
        <img src={imgSrc} alt={props.name} />
      </div>
      <div className={classes.PokeCard_data}>Type: {props.type}</div>
      <div className={classes.PokeCard_data}>EXP: {props.exp}</div>
    </div>
  );
};

export default PokeCard;
