import React from "react";
import { mount } from "../../enzyme";

// Component tested
import ProductManagement from "./index";

// Model for mocks
import Product from "../../models/Product";

describe("Relationship between ProductList and AddProduct", () => {
  it("should add an ProductListItem to ProductList when AddProduct form is submitted", () => {
    const products = [
      new Product(1, "Test Product 1", 25.0),
      new Product(2, "Test Product 2", 10.0),
      new Product(3, "Test Product 3", 50.0),
    ];

    const wrapper = mount(<ProductManagement />);

    const addProduct = wrapper.find("AddProduct");

    addProduct
      .find("input[name='name']")
      .simulate("change", { target: { value: "Product Added 1" } });
    addProduct
      .find("input[name='price']")
      .simulate("change", { target: { value: 20 } });

    addProduct.simulate("submit");

    const productList = wrapper.find("ProductList");

    expect(productList.find("ProductListItem").length).toBe(
      products.length + 1
    );
  });
});
