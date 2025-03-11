const mockDb = require("../../db/products");
const { filterProducts } = require("./");

describe("Products controller:", () => {
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
});
