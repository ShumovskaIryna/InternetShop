import React from 'react';
import Navbar from './components/Navbar';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowProduct from './components/ShowProduct';

import { getAllGoods } from './request';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: {},
      category: 'all',
      ShowProduct: false,
      fullItem: {}
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowProduct = this.onShowProduct.bind(this);
  }

  async componentDidMount() {
    const { category } = this.state;

    const { data } = await getAllGoods();

    const currentItems = data.categories.find((el) => el.name === category);
    this.setState(() => ({
      currentItems,
      data
    }));
  }
  onShowProduct(item) {
    this.setState({ fullItem: item });
    this.setState({ showProduct: !this.state.showProduct });
  }
  chooseCategory(category) {
    this.setState({
      category,
      currentItems: this.state.data.categories.find((el) => el.name === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) { isInArray = true; }
    });
    if (!isInArray) { this.setState({ orders: [...this.state.orders, item] }); }
  }

  render() {
    const { currentItems, orders} = this.state;
    return (
      Object.keys(currentItems).length
        ? (
          <div className="wrapper">
            <Navbar
              orders={orders}
              onDelete={this.deleteOrder}
            />
            <Categories
              allCategories = {this.state.data}
              chooseCategory = {this.chooseCategory}
            />
            <Items
              onShowProduct={this.onShowProduct}
              items={currentItems}
              onAdd={this.addToOrder}
            />
            {this.state.showProduct && <ShowProduct onAdd={this.addToOrder} onShowProduct={this.onShowProduct} item={this.state.fullItem}/>}
          </div>
        )
        : <div>"not yet"</div>
    );
  }
}

export default App;
