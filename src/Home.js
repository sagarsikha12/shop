import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://websitedepot.com/wp-content/uploads/2015/08/E-Commerce-1024x535.jpg"
            alt=""
            className="home__image"
          />
          <div className="home__row">
            
            <Product
            id="123"
              title="bag"
              price={11.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/51sUf-LbvxL._AC_UL800_QL65_.jpg"
            
            />
            <Product/>
            
          </div>
          <div className="home__row">
            <Product
              id="1253"
              title="bagss"
              price={11.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/51sUf-LbvxL._AC_UL800_QL65_.jpg"
            
            />
          <Product/>
          <Product/>
          </div>
          <div className="home__row">
          <Product/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
