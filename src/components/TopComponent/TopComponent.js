import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Currency from './Currency';
import Cart from './Cart';


const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => summa += Number.parseFloat(el.prices[0].amount));
  return (
    <div className="full">
      <h2>You want to buy this:</h2>
      {props.orders.map((el) => (
        <Cart onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">
        Total : { }
        {new Intl.NumberFormat().format(summa)}
        {/* {props.prices.currency.symbol} */}
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



export default function TopComponent(props) {
  let [cartOpen, setCartOpen] = useState(false);
  console.log(props)
  return (
    <header className="header">

      <span className="logo">
        <img
          className="brand-logo"
          src="logo.png"
          alt="logo"
        />
      </span>

      <div className="actions">
      {/* <Currency
        allCurrency={props?.categories?.products?.prices}
        //chooseCurrency={this.chooseCurrency}
      /> */}
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
