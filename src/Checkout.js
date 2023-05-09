import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-fe.ssl-images-amazon.com/images/G/35/sports/LEGO_May_Fourth_Banner_02_05_2023.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <CheckoutProduct />
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
