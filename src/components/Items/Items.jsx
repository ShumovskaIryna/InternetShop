import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Items(props) {
  const {
    items, onShowProduct, onAdd,
  } = props;
  return (
    <div className="">
      {items?.products.map((el) => (
        <Item
          onShowProduct={onShowProduct}
          key={el.id}
          item={el}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

Items.propTypes = {
  items: PropTypes.shape(
    {
      products: PropTypes.arrayOf(PropTypes.shape(
        { name: PropTypes.string },
      )),
    },
  ).isRequired,
  onShowProduct: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,

};

export default Items;
