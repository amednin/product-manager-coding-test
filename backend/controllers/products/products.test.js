let mockDb = require("../../db/products");
const initialMockDb = [
  { id: 1, name: "Fries", available: true },
  { id: 2, name: "Big Mac", available: true },
  { id: 3, name: "Drink", available: false },
  { id: 4, name: "6 pc. McNuggets", available: true },
  { id: 5, name: "12 pc. McNuggets", available: false },
  { id: 6, name: "(New) Cheeseburger", available: false },
  { id: 7, name: "Sundae", available: true },
];

jest.mock("../../db/products", () => initialMockDb);
const { filterProducts, deleteProduct } = require("./");

describe("Products controller:", () => {
  beforeEach(() => {
    mockDb = initialMockDb;
  });

  test("filterProducts: empty params", () => {
    const products = filterProducts({});

    expect(products.length).toBe(mockDb.length);
  });

  test("filterProducts: search includes . (dot)", () => {
    // results will be sorted by id
    const products = filterProducts({ searchText: "." });

    expect(products.length).toBe(2);
    expect(products[0].name).toBe("6 pc. McNuggets");
    expect(products[1].name).toBe("12 pc. McNuggets");
  });

  test("filterProducts: search includes () (parentheses/round bracket)", () => {
    // results will be sorted by id
    const products = filterProducts({ searchText: "(" });

    expect(products.length).toBe(1);
    expect(products[0].name).toBe("(New) Cheeseburger");

    // closing parentheses
    const products2 = filterProducts({ searchText: ")" });

    expect(products2.length).toBe(1);
    expect(products2[0].name).toBe("(New) Cheeseburger");

    // will match even the case is different
    const products3 = filterProducts({ searchText: "(new" });

    expect(products3.length).toBe(1);
    expect(products3[0].name).toBe("(New) Cheeseburger");

    // secuential chars must match
    const products4 = filterProducts({ searchText: "(new Chee" });

    expect(products4.length).toBe(0);
  });

  test("deleteProduct: delete existing product from the list", () => {
    const success = deleteProduct({ id: 1 });

    expect(success).toBe(true);
  });

  test("deleteProduct: cannot found a product with the requested id", () => {
    const success = deleteProduct({ id: -1 });

    expect(success).toBe(null);
  });
});
