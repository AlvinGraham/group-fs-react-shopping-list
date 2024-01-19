import Card from "../Card/Card";
import "./ShoppingList.css";
import axios from "axios";
import { useEffect } from "react";

export default function ShoppingList({
  shoppingListArray,
  refreshShoppingListCallback,
}) {
  console.log("shoppingListArray:");
  // console.log(props.shoppingListArray);
  console.table(shoppingListArray);

  function resetBtnHandler(event) {
    event.preventDefault();

    for (const item of shoppingListArray) {
      let updatedItem = {
        itemID: item.id,
        purchasedTo: false,
      };

      console.log("updatedItem", updatedItem);

      axios
        .put(`/api/itemList/`, updatedItem)
        .then((response) => {
          refreshShoppingListCallback();
        })
        .catch((err) => {
          console.error("ERROR in client PUT", err);
        });
    }
  }

  function clearBtnHandler(event) {
    event.preventDefault();

    for (const item of shoppingListArray) {
      axios
        .delete(`/api/itemList/${item.id}`)
        .then((response) => {
          refreshShoppingListCallback();
        })
        .catch((err) => {
          console.error("ERROR in client PUT", err);
        });
    }
  }

  return (
    <div>
      <h2>Shopping List:</h2>
      <button onClick={resetBtnHandler}>Reset</button>
      <button onClick={clearBtnHandler}>Clear</button>
      <div className="cardField">
        {shoppingListArray.map((shoppingItem, itemIndex) => {
          return (
            <Card
              key={itemIndex}
              cardData={shoppingItem}
              refreshShoppingListCallback={refreshShoppingListCallback}
            />
          );
        })}
      </div>
    </div>
  );
}
