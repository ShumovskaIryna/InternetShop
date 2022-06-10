import React, { Component } from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);
  }
  
    render() {
      return (
        <div className="categories">
            { this.props.allCategories.categories.map(({ name }, index) => (
            <div
              className="element"
              key={index}
              onClick={() => this.props.chooseCategory(name)}
            >
              <label>{name}</label>
            </div>
          ))}
        </div>
      );
    }
  
  }
export default Categories;
