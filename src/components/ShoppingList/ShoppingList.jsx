import { useState } from 'react';
import Card from '../Card/Card';

export default function ShoppingList (props) {
  console.log('shoppingListArray:');
  // console.log(props.shoppingListArray);
  console.table(props.shoppingListArray);
  
  return (
    <div>
      <h2>Shopping List:</h2>
      <button>Reset</button>
      <button>Clear</button>
      {(props.shoppingListArray).map ((shoppingItem) => {
        return <Card cardData={shoppingItem} />
      })}
    </div>
  );
}