import React from "react";
import { render, screen } from "@testing-library/react";
import ProductTable, { Product } from "../../components/ProductTable";

describe("ProductTable Component:", () => {
  test("renders list with a product that is unable to be deleted", () => {
    const products: Product[] = [
      {
        id: 1,
        name: "Product A",
        available: false,
      },
      {
        id: 2,
        name: "Product B",
        available: true,
      },
    ];
    const props = {
      products,
      handleDeleteProduct: () => {},
    };

    render(<ProductTable {...props} />);
    const button = screen.getByLabelText(
      "This product is available and cannot be deleted",
    );

    expect(button).toBeDefined();
  });

  test("renders list with ZERO products unable to be deleted", () => {
    const products: Product[] = [
      {
        id: 1,
        name: "Product A",
        available: false,
      },
      {
        id: 2,
        name: "Product B",
        available: false,
      },
      {
        id: 3,
        name: "Product C",
        available: false,
      },
      {
        id: 4,
        name: "Product D",
        available: false,
      },
    ];
    const props = {
      products,
      handleDeleteProduct: () => {},
    };

    render(<ProductTable {...props} />);
    const button = screen.queryByLabelText(
      "This product is available and cannot be deleted",
    );

    expect(button).toBe(null);
  });
});
