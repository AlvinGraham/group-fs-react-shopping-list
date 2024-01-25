import React from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { blue } from '@mui/material/colors';

function Header() {
    return (
        <header className="banner-header">
            <ShoppingCartIcon sx={{ fontSize: 80, color: blue[500] }}/>
            <h1>My Shopping List</h1>
        </header>
    );
}

export default Header;
