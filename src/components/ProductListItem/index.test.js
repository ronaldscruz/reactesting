import React from "react";
import { shallow, mount } from "../../enzyme";

// Models
import Product from "../../models/Product";

// Components
import ProductListItem from "../ProductListItem";

describe("Each item render", () => {
  it("should render product labels correctly", () => {
    const product = new Product(1, "Test Product 1", 20.0);

    const wrapper = shallow(<ProductListItem product={product} />);

    expect(wrapper.childAt(0).text().trim()).toBe(product.id.toString());
    expect(wrapper.childAt(1).text().trim()).toBe(product.name.toString());
    expect(wrapper.childAt(2).text().trim()).toBe(`$${product.price}`);
  });
});
