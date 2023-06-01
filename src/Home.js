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
            <Product
              id="124"
              title="Shoes"
              price={29.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/71t1sjQv2tL._AC_UL800_QL65_.jpg"
            />
            
          </div>
          <div className="home__row">
            <Product
              id="1253"
              title="bagss"
              price={11.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/51sUf-LbvxL._AC_UL800_QL65_.jpg"
            />
            <Product
              id="1254"
              title="T-Shirt"
              price={19.99}
              rating={3}
              image="https://m.media-amazon.com/images/I/61zGZuOzTIL._AC_UL800_QL65_.jpg"
            />
            <Product
              id="1255"
              title="Jeans"
              price={39.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/71UwwaxuHIL._AC_UL800_QL65_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="1256"
              title="Watch"
              price={199.99}
              rating={5}
              image="https://i.imgur.com/8982972.jpg"

            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;