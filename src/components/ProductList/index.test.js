import React from "react";
import { shallow, mount } from "../../enzyme";

// Component tested
import ProductList from "./index";
import AddProduct from "../AddProduct/index";

// Model for mocks
import Product from "../../models/Product";

describe("Listing products", () => {
  it("renders products list", () => {
    const products = [
      new Product(1, "Test Product 1", 25.0),
      new Product(2, "Test Product 2", 10.0),
      new Product(3, "Test Product 3", 50.0),
    ];

    const wrapper = shallow(<ProductList products={products} />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find("ProductListItem")).toHaveLength(products.length);
  });

  it('displays "no products" message when empty array passed', () => {
    let wrapper = shallow(<ProductList products={[]} />);

    expect(wrapper.text()).toBe("No products found");
  });
});
