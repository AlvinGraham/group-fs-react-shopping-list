import { useState } from "react";
import "./Card.css";
import axios from "axios";

export default function Card({ cardData, refreshShoppingListCallback }) {
  // console.log(props.cardData);
  function buyButtonHandler(event) {
    event.preventDefault();

    let updatedItem = {
      itemID: cardData.id,
      purchasedTo: true,
    };

    axios
      .put(`/api/itemList/`, updatedItem)
      .then((response) => {
        refreshShoppingListCallback();
      })
      .catch((err) => {
        console.error("ERROR in client PUT", err);
      });
  }

  function removeButtonHandler(event) {
    event.preventDefault();

    axios
      .delete(`/api/itemList/${cardData.id}`)
      .then((response) => {
        refreshShoppingListCallback();
      })
      .catch((err) => {
        console.error("ERROR in client PUT", err);
      });
  }
  return (
    <div className="card">
      <p>{cardData.name}</p>
      <p>
        {cardData.quantity} {cardData.unit}{" "}
        {cardData.purchased ? "true" : "false"}
      </p>

      {!cardData.purchased && (
        <div className="buttonField">
          <button onClick={buyButtonHandler}>Buy</button>
          <button onClick={removeButtonHandler}>Remove</button>
        </div>
      )}
    </div>
  );
} //{props.shoppingItem.name}
