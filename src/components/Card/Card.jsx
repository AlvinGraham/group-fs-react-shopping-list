import { useState } from 'react';
import './Card.css';

export default function Card (props) {
  // console.log(props.cardData);
  return (
    
    <div className='card'>
      <p>{props.cardData.name}</p>
      <p>{props.cardData.quantity} {props.cardData.unit}</p>
      <div className='buttonField'>
        <button>Buy</button>
        <button>Remove</button>
        </div>
    </div>
    
  );
}//{props.shoppingItem.name}