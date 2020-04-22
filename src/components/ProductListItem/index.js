import React from "react";
import PropTypes from "prop-types";

import Product from "../../models/Product";

const ProductListItem = ({ product: p }) => (
  <li>
    <span> {p.id} </span>
    <strong> {p.name} </strong>
    <span> ${p.price} </span>
  </li>
);

ProductListItem.defaultProps = {
  product: {},
};

ProductListItem.propTypes = {
  product: PropTypes.instanceOf(Product).isRequired,
};

export default ProductListItem;
