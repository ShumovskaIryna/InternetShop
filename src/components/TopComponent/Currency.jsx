import React, { Component } from 'react'

class Currency extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    console.log(this.props, 3333)
    return (
        
      <div className="currency">
            { this.props.allCurrency.currency.map((el, index) => (
            <div
              className="currencyName"
              //onClick={() => this.props.chooseCurrency(el.label)}
            >
              <label>{el.label + el.symbol}</label>
            </div>
          ))}
          </div>
          

    )
  }
}

export default Currency