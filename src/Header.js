import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className='header'>
      <Link to="/" style={{textDecoration:"none"}}>
        <div className="header__logo">
        <LocalMallIcon className="header__logoImage" fontSize="large"/>
        <h2 className="header__logoTitle"> Shop </h2>
        </div>
        </Link>
      
     
      <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne"> Hello Guest</span>
          <span className="nav__itemLineTwo"> Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne"> Your </span>
          <span className="nav__itemLineTwo">  Shop</span>
        </div>
        <Link to="/checkout" style={{textDecoration:"none"}}>
        <div className="nav__itemBasket">
          <ShoppingBasketIcon />
          
          <span className="nav__basketCount"> 0 </span>
        </div>
        </Link>
      
      </div>
    </div>
  )
}

export default Header