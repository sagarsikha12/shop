import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct() {
  return (

           <div className="checkoutProduct">
            <img src="https://m.media-amazon.com/images/I/51sUf-LbvxL._AC_UL800_QL65_.jpg" alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    "Laptop"
                </p>
            
            <p className="checkoutProduct__product">
                <small>$</small>
                <strong>30</strong>
            </p>
            <div className="checkoutProduct__rating">
                ⭐️⭐️
            </div>
            <button>Remove from Basket</button>
            </div>
        </div>
    
  )
}

export default CheckoutProduct