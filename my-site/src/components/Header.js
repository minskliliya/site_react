import React from 'react';
import {Link } from 'react-router-dom'

const Header = () => (
  <header> 
    <h1>My first site on React JS</h1>
    <Link to="/"  exact="true" style={{'paddingRight': '10px'}}>Home</Link>
    <Link to="/about" style={{'paddingRight': '10px'}}>About</Link>  
    <Link to="/contact" style={{'paddingRight': '10px'}}>Contact</Link>  
    <Link to="/myworks" style={{'paddingRight': '10px'}}>My works</Link>  
  </header>   
);

export default Header;
