import React, { Component } from 'react'

export class Item extends Component {
  render() {
    console.log(this.props)
    return (
            <div className="product-card">
                      <div className="good">
          <img src={this.props.item.gallery[0]}
            className="gallery"
            alt="product" onClick={() => this.props.onProductDesc} />
                           <div className="descrtiption">
                              <p className="title">{this.props.item.name}</p>
                              <b className="price">{this.props.item.price || Math.round(Math.random() * 1205)}$</b>
                            </div>
                  <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>+</div>
                        </div>
            </div>
      )
  }
}
export default Item;