import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import AddItemForm from '../AddItemForm/AddItemForm.jsx';


function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const refreshShoppingList = () => {
    axios.get('/api/itemList')
      .then((response) => {
        setShoppingList(response.data);
        console.log('Data Received from DB:');
        console.table(response.data);
      })
      .catch((err) => {
        console.error('Error in client GET:', err);
      });
  };

  useEffect(() => {
    refreshShoppingList();
  }, []);



  return (
    <div className="App">
      <Header />
      <AddItemForm />
    </div>
  );
}

export default App;
