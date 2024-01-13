import { useState } from 'react';

export default function Card (props) {
  console.log(props.cardData);
  return (
    <>
     <h3>I am Card {props.cardData.name}</h3>
     <button>Buy</button>
     <button>Remove</button>
    </>
  );
}//{props.shoppingItem.name}