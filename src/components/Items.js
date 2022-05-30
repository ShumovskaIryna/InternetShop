import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
    render() {

      return (
          <div className="">
              {this.props?.items?.items?.map((el) => (
                  <Item onProductDesc={this.props.onProductDesc} key={el.id} item={el} onAdd={this.props.onAdd} />
              ))}
          </div>
      ) 
  }
}

export default Items