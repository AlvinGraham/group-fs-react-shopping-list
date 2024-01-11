import axios from 'axios';
import { useState } from 'react';
import './AddItemForm.css';

function AddItemForm() {

  const [itemValue, setItemValue] = useState('');
  const [quantityValue, setQuantityValue] = useState('');
  const [unitValue, setUnitValue] = useState('');
  
  function handleItemFormSubmit(event) {
    event.preventDefault();

    // package data
    let newItem = {
      name : itemValue,
      quantity: quantityValue,
      unit: unitValue,
      purchased: false
    };

    axios.post('/api/itemList', newItem)
    .then((response) => {
      setItemValue('');
      setQuantityValue('');
      setUnitValue('');
  })
    .catch((err) => {
      console.error('ERROR in client POST:', err)
    });
    

  };

  return (
    <>
      <h1>Add an Item:</h1>
      <form onSubmit={handleItemFormSubmit}>
        <label>Item:
          <input id="itemInput" onChange = {(event) => setItemValue(event.target.value)}
            value={itemValue}/>
        </label>
        <label>Quantity:
          <input id="quantityInput" onChange = {(event) => setQuantityValue(event.target.value)}
            value={quantityValue}/>
        </label>
        <br></br>
        <label>Unit:
          <input id="unitInput" onChange = {(event) => setUnitValue(event.target.value)}
            value={unitValue}/>
        </label>
        <button type="submit">Save</button>

      </form>
    </>
  );
}

export default AddItemForm;