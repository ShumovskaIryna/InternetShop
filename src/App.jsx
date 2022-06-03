import React from 'react';
import Navbar from './components/Navbar';
import Items from './components/Items';
import Categories from './components/Categories';
import ProductDesc from './components/ProductDesc';

import { getAllGoods } from './request';

// import { InMemoryCache } from 'apollo-cache-inmemory';
// import ApolloClient from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';

// const token = localStorage.getItem('token');
// const client = new ApolloClient({
//   link: new HttpLink({
//      uri: 'http://localhost:4000/graphql',
//      headers: {
//       token: token || ''
//     }
//   }),
//   cache: new InMemoryCache()
// });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: {},
      category: 'all',
      productDesc: false,
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onProductDesc = this.onProductDesc.bind(this);
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

  onProductDesc() {
    this.setState({ productDesc: !this.state.productDesc });
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
    const { currentItems, orders, productDesc } = this.state;
    return (
      Object.keys(currentItems).length
        ? (
          <div className="wrapper">
            <Navbar
              orders={orders}
              onDelete={this.deleteOrder}
            />
            <Categories
              allCategories= {this.state.data}
              chooseCategory={this.chooseCategory}
            />
            <Items
              onProductDesc={this.onProductDesc}
              items={currentItems}
              onAdd={this.addToOrder}
            />
            {productDesc && <ProductDesc />}
          </div>
        )
        : <div>"not yet"</div>
    );
  }
}

export default App;
