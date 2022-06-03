import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={this.props.item.gallery[0]}
          className="gallery"
          alt="product"
          onClick={() => this.props.onProductDesc}
        />
        <p className="title">{this.props.item.name}</p>
        <b className="price">
          {this.props.item.price || Math.round(350 + Math.random() * 0.01)}
          $
        </b>
        <FaTrash className="delete" onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    );
  }
}

export default Order;
