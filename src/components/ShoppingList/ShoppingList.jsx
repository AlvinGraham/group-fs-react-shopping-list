import { useState } from 'react';
import Card from '../Card/Card';
import './ShoppingList.css';

export default function ShoppingList (props) {
  console.log('shoppingListArray:');
  // console.log(props.shoppingListArray);
  console.table(props.shoppingListArray);
  
  return (
    <div>
      <h2>Shopping List:</h2>
      <button>Reset</button>
      <button>Clear</button>
      <div className='cardField'>
        {(props.shoppingListArray).map ((shoppingItem, itemIndex) => {
          return <Card key={itemIndex} cardData={shoppingItem} />
        })}  
      </div>
    </div>
  );
}