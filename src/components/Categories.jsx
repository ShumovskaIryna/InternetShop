import React, { Component } from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.allCategories
    }
  }
  
    render() {
      return (
        <div className="categories">
          {/* { this.state.allCategories?.map((el, name) => ( */}
            { this.props.allCategories.categories.map((el, name) => (
            <div
              className="element"
              key={name}
              onClick={() => this.props.chooseCategory(el.name)}
            >
              <label>{el.name}</label>
            </div>
          ))}
        </div>
      );
    }
  
  }
export default Categories;
