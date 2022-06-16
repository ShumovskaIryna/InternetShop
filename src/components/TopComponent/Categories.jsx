import React from 'react';

function Categories(props) {
  return (
          <div className="categories">
            { props.allCategories.categories.map(({ name }, index) => (
            <div
              className="element"
              key={index}
              onClick={() => props.chooseCategory(name)}
              >
              <label>{name}</label>
            </div>
          ))}
        </div>
  )
}
export default Categories;
