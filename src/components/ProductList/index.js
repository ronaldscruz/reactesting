import React, { Component } from "react";
import PropTypes from "prop-types";

// Models
import Product from "../../models/Product";

// Components
import ProductListItem from "../ProductListItem";

export default class ProductList extends Component {
  sumTotal() {
    const { products } = this.props;

    if (products?.length > 0) {
      return products.reduce((prevP, currentP) => prevP.price + currentP.price);
    }

    return 0;
  }

  alertSale(productId = 0, discountPercentage = 0) {
    if (!productId || !discountPercentage) return "";

    const { products } = this.props;

    const productInSale = products.findIndex((p) => (p.id = productId));

    if (!products[productInSale]) return "";

    alert(
      `New Product in sale: ${products[productInSale].name} with ${discountPercentage}%!`
    );
  }

  render() {
    const { products } = this.props;

    return (
      <div className="product-list-component">
        {products?.length > 0 ? (
          <ul>
            {products.map((p) => (
              <ProductListItem product={p} key={p.id} />
            ))}
          </ul>
        ) : (
          <h2>No products found</h2>
        )}
      </div>
    );
  }
}

ProductList.defaultProps = {
  products: [],
};

ProductList.propTypes = {
  products: PropTypes.arrayOf((p) => p instanceof Product).isRequired,
};
