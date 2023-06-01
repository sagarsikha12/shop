import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal ({basket.length} items):
          <strong>{currencyFormatter.format(getBasketTotal(basket))}</strong>
        </p>
        <small className="subtotal_gift">
            <input type="checkbox" /> This order contains a gift
        </small>
      </>
    </div>
  );
}

export default Subtotal;
