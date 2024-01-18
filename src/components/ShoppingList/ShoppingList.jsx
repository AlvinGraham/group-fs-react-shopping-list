import Card from "../Card/Card";
import "./ShoppingList.css";
import axios from "axios";

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
      axios
        .put(`/api/itemList/${item.id}`)
        .then()
        .catch((err) => {
          console.error("ERROR in client PUT", err);
        });
    }

    refreshShoppingListCallback();
  }
  return (
    <div>
      <h2>Shopping List:</h2>
      <button onClick={resetBtnHandler}>Reset</button>
      <button>Clear</button>
      <div className="cardField">
        {shoppingListArray.map((shoppingItem, itemIndex) => {
          return (
            <Card
              key={itemIndex}
              cardData={shoppingItem}
            />
          );
        })}
      </div>
    </div>
  );
}
