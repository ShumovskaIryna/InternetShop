import React from 'react';
import TopComponent from './components/TopComponent/TopComponent';
import Items from './components/Items/Items';
//import Categories from './components/TopComponent/Categories';
import FullProduct from './components/Items/FullProduct/FullProduct';

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
    this.setState({ fullProduct: !this.state.fullProduct });
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
            <TopComponent
              orders={orders}
              onDelete={this.deleteOrder}
              allCategories={this.state.data}
              chooseCategory={this.chooseCategory}
            />
            {/* <Categories
              allCategories = {this.state.data}
              chooseCategory = {this.chooseCategory}
            /> */}
            <Items
              onShowProduct={this.onShowProduct}
              items={currentItems}
              onAdd={this.addToOrder}
            />
            {this.state.fullProduct &&
              <FullProduct
                onAdd={this.addToOrder}
                onShowProduct={this.onShowProduct}
                item={this.state.fullItem}
              />}
          </div>
        )
        : <div>"not yet"</div>
    );
  }
}

export default App;
