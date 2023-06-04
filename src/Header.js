import React, { useState, useEffect } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
  const [{ basket}] = useStateValue();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        setUser(authUser);
      } else {
        // user is logged out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='header'>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <LocalMallIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle"> Shop </h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuth} className="nav__item">
            <span className="nav__itemLineOne"> Hello {user ? user.email: 'Guest'}</span>
            <span className="nav__itemLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne"> Your </span>
          <span className="nav__itemLineTwo"> Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />

            <span className="nav__basketCount"> {basket.length} </span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Header;
