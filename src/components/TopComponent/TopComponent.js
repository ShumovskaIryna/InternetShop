import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
//import Items from '../Items/Items';
import Cart from './Cart';
import Categories from './Categories';

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) =>
    summa += Number.parseFloat(el.prices[0].amount));
  return (
    <div className="full">
      <h2>You want to buy this:</h2>
      {props.orders.map((el) => (
        
        <Cart
          onDelete={props.onDelete}
          key={el.id}
          item={el} />
      ))}
      
      <p className="summa">
        Total : { }
        {new Intl.NumberFormat().format(summa)}
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
  const { chooseCategory } = props;
  let [cartOpen, setCartOpen] = useState(false);

  let [category, setCategory] = useState("all")
  // let [currentItems, setCurrentItems] = useState()

// const chooseCategory =  () => {
//     setCategory(currentItems => {
//       return { currentItems: this.state.data.categories.find((el) => el.name === category)}
//     });
//   }
  
  //console.log(category)
  // useEffect(() => {
  //    //setCurrentItems()
  //     setCurrentItems(currentItems  => props.data.categories.find((el) => el.name === category))
  //   }, [category])

  return (
    <header className="header">
      <Categories
        //onClick={() => setCategory(category)}
        //onClick={() => console.log(currentItems, category)}
        allCategories={props.allCategories}
        chooseCategory={chooseCategory}
      />
      <span className="logo">
        <img
          className="brand-logo"
          src="logo.png"
          alt="logo"
        />
      </span>

      <div className="actions">
      
        {/* <Currency
      /> */}
        
        <FaShoppingCart
          onClick={() => setCartOpen(cartOpen = !cartOpen)}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />
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
