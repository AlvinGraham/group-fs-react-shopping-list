import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import AddItemForm from '../AddItemForm/AddItemForm.jsx';


function App() {
    return (
        <div className="App">
            <Header />
            <AddItemForm />
        </div>
    );
}

export default App;
