import React, { Component } from 'react'
import { FaTrash } from "react-icons/fa"; 
export class Order extends Component {
  render() {
    return (
        <div className="item">
            <img src="1.png" className="gallery" alt="product"/>
            <p className="title">{this.props.item.name}</p>
            <b className="price">{this.props.item.price}$</b>
            <FaTrash className="delete" onClick={ ()=> this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order