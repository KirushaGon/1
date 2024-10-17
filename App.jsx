import React from 'react';
import './App.css';


import search from "./photo/SearchIcon.svg"
import cart from './photo/CartIcon.svg'
import logo from './photo/Logo.svg'

function App() {
  return (
    <>
    
      <div className='header'>
        <img src={logo} alt="logo"></img>
        <p>Organink</p>
        <ul className='tab'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">News</a></li>
        </ul>
        <div className="block_input">
          <input type="text" />
          <img src={search} alt='ERROR' />
        </div>
        <div className='cart'>
          <img src={cart} alt='ERROR' />
          <p>cart(0)</p>
        </div>
      </div>
    </>
  );
}

export default App;