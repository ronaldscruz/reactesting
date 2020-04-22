import React, { useState } from "react";

import MockedProducts from "../../mocks/Products";

import AddProduct from "../../components/AddProduct";
import ProductList from "../../components/ProductList";

const ProductManagement = () => {
  const [products, setProducts] = useState(MockedProducts);

  return (
    <div className="main">
      <h1>
        <span role="img" aria-label="package icon">
          📦
        </span>{" "}
        Products
      </h1>

      <ProductList products={products} />

      <hr />

      <AddProduct
        onAdd={(product) => {
          setProducts([...products, product]);
        }}
      />
    </div>
  );
};

export default ProductManagement;
