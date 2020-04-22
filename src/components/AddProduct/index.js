import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import Product from "../../models/Product";

const AddProduct = ({ onAdd }) => {
  const [id, setId] = useState(4);

  function onSubmitProduct(e) {
    e.preventDefault();

    const productAdded = new Product(
      id,
      nameRef.current.value,
      priceRef.current.value
    );

    setId(id + 1);

    onAdd(productAdded);
  }

  const nameRef = useRef("");
  const priceRef = useRef(0);

  return (
    <form
      name="add-product"
      method="POST"
      className="add-product-component"
      onSubmit={onSubmitProduct}
    >
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" ref={nameRef} required />

      <br />

      <label htmlFor="price">Price: </label>
      <input id="price" name="price" type="number" ref={priceRef} required />

      <br />

      <button>Add</button>
    </form>
  );
};

AddProduct.defaultProps = {
  onAdd: () => {},
};

AddProduct.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddProduct;
