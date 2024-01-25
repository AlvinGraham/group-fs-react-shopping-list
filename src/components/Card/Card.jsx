import { useState } from "react";
import "./Card.css";
import axios from "axios";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

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
      </p>

      {!cardData.purchased && (
        <div className="buttonField">
          <Button
            onClick={buyButtonHandler}
            variant="outlined"
            size="small"
            endIcon={<AttachMoneyIcon />}>
            Buy
          </Button>
          <Button
            onClick={removeButtonHandler}
            variant="outlined"
            endIcon={<DeleteIcon />}
            size="small">
            Remove
          </Button>
        </div>
      )}
    </div>
  );
} //{props.shoppingItem.name}
