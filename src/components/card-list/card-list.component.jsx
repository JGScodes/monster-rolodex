import React from 'react';
import { Card } from '../card/card.component';
import  './card-list.styles.css';

export const CardList = (props) => {
  return <div className='card-list'>
    {props.monsters.map(monster => (
      // With map(), it usually creates a new array, but if you render out a bunch of html/jsx blocks it'll be smart enough to know that it needs to just display those elements to the dom instead of creating an array
      <Card key={monster.id} monster={monster}/>))}
    </div>;
}
