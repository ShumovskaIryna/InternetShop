import React, { Component } from 'react';
import MiniGallery from './MiniGallery'

export class ShowProduct extends Component {
  
  _handleKeyUp = (event) => {
    if (event.key === 'Escape') {
      return this.props.onShowProduct(this.props.item);
    }
  }
  componentDidMount(){
      document.addEventListener("keyup", this._handleKeyUp);
  }
  componentWillUnmount() {
      document.removeEventListener("keyup", this._handleKeyUp);
  }

  render() {
    return (
      <div className="full-item"> {/* black background */}
        <div className="full-product-card"> {/* white div */}
           
          <div className="close"
            onClick={() => this.props.onShowProduct(this.props.item)}
          >
            Close
          </div>

          <MiniGallery
            photos={this.props.item?.gallery}
          />

         <img
            src={this.props.item.gallery[0]}
            className="full-gallery"
            alt="product"
          />
          <div className="full-descrtiption">
            <p className="brand">{this.props.item.brand}</p>
            <p className="name">{this.props.item.name}</p>
               
            <div className="description">
                 <p className="atribut">{this.props.item.attributes[0]?.id || "("}:</p>
                
              <div className="attributes">
            { this.props.item?.attributes[0]?.items.map((el, id, value) => (
            <div
                className="size"
                key={id} background-color={value}
              >{el.displayValue}
            </div>
          ))}
              </div>
      
              <b className="price">
                <p className="atribut">Price:</p>
                {this.props.item.prices[0].amount }
                {this.props.item.prices[0].currency.symbol}
              </b>
              <div className="full-add-to-cart" onClick={() => this.props.onAdd(this.props.item)} title="Add to cart">
            <label className="cart-label">Add to cart</label>
               </div>
              <p className="content" dangerouslySetInnerHTML={{__html: this.props.item.description }}>
                </p>
            </div>

          </div>  
        </div>
      </div>
    );
  }
}
export default ShowProduct;
