import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => summa += Number.parseFloat(el.price));
  return (
    <div className="full">
      <h2>You want to buy this:</h2>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">
        Total:{summa}$
        {/* {new Intl.NumberFormat().format(summa)} */}
      </p>
    </div>
  );
};

const showNothing = () => (
  <div className="empty">
    <h2>Now cart is empty... Yet</h2>
    <h5>You can start the shopping right now</h5>
  </div>
);

export default function Navbar(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header className="header">
      <span className="logo"><img className="brand-logo" src="logo.png" alt="logo" /></span>

      <div className="actions">
        <div className="group">
          <select className="frame">
            <option value="1" label="$" disabled hidden>$</option>
            <option value="1" label="$ USD">$ USD</option>
            <option value="2" label="€ EUR">€ EUR</option>
            <option value="3" label="¥ JPY">¥ JPY</option>
          </select>
        </div>

        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
        {cartOpen && (
        <div className="shop-cart">
          {props.orders.length > 0
            ? showOrders(props) : showNothing()}
        </div>
        )}
      </div>
    </header>
  );
}
