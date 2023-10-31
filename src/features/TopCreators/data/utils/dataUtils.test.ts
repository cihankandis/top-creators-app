import Product from "../../types/Product";
import {
  compareCreators,
  getMostRecentProduct,
  getProductCount,
} from "./dataUtils";

describe("Data Utility Functions", () => {
  it("should return the correct product count for a given creator", () => {
    const products: Product[] = [
      { id: "1", creatorId: "A", createTime: "2022-01-01T12:00:00" },
      { id: "2", creatorId: "A", createTime: "2022-01-02T12:00:00" },
      { id: "3", creatorId: "B", createTime: "2022-01-02T12:00:00" },
    ];
    const creatorId = "A";

    const count = getProductCount(products, creatorId);

    expect(count).toEqual(2);
  });

  it("should return 0 if no products are found for the given creator", () => {
    const products: Product[] = [
      { id: "1", creatorId: "B", createTime: "2022-01-01T12:00:00" },
      { id: "2", creatorId: "C", createTime: "2022-01-02T12:00:00" },
    ];
    const creatorId = "A";

    const count = getProductCount(products, creatorId);

    expect(count).toEqual(0);
  });

  it("should return the most recent product for a given creator", () => {
    const products: Product[] = [
      { id: "1", creatorId: "A", createTime: "2022-01-01T12:00:00" },
      { id: "2", creatorId: "A", createTime: "2022-01-02T12:00:00" },
      { id: "3", creatorId: "A", createTime: "2022-01-03T12:00:00" },
      { id: "3", creatorId: "B", createTime: "2022-01-03T12:00:00" },
      { id: "3", creatorId: "A", createTime: "2022-01-02T11:00:00" },
    ];
    const creatorId = "A";

    const mostRecentProduct = getMostRecentProduct(products, creatorId);

    expect(mostRecentProduct?.id).toEqual("3");
  });

  it("should return null if no products are found for the given creator", () => {
    const products: Product[] = [
      { id: "1", creatorId: "B", createTime: "2022-01-01T12:00:00" },
      { id: "2", creatorId: "C", createTime: "2022-01-02T12:00:00" },
    ];
    const creatorId = "A";

    const mostRecentProduct = getMostRecentProduct(products, creatorId);

    expect(mostRecentProduct).toBeNull();
  });

  it("should correctly compare creators by product count (different product count)", () => {
    const creatorA = { productCount: 2, mostRecentProduct: null };
    const creatorB = { productCount: 3, mostRecentProduct: null };

    const result = compareCreators(creatorA, creatorB);

    expect(result).toBeGreaterThanOrEqual(1);
  });

  it("should correctly compare creators by most recent product (latest B)", () => {
    const creatorA = {
      productCount: 3,
      mostRecentProduct: {
        id: "1",
        creatorId: "A",
        createTime: "2022-01-01T12:00:00",
      },
    };
    const creatorB = {
      productCount: 3,
      mostRecentProduct: {
        id: "1",
        creatorId: "B",
        createTime: "2022-01-02T12:00:00",
      },
    };

    const result = compareCreators(creatorA, creatorB);

    expect(result).toBeGreaterThanOrEqual(1);
  });

  it("should correctly compare creators by most recent product (latest A)", () => {
    const creatorA = {
      productCount: 3,
      mostRecentProduct: {
        id: "1",
        creatorId: "A",
        createTime: "2022-01-04T12:00:00",
      },
    };
    const creatorB = {
      productCount: 3,
      mostRecentProduct: {
        id: "1",
        creatorId: "B",
        createTime: "2022-01-02T12:00:00",
      },
    };

    const result = compareCreators(creatorA, creatorB);

    expect(result).toBeLessThanOrEqual(-1);
  });

  it("should correctly compare creators by most recent product (no product from A)", () => {
    const creatorA = {
      productCount: 3,
      mostRecentProduct: null,
    };
    const creatorB = {
      productCount: 3,
      mostRecentProduct: {
        id: "1",
        creatorId: "B",
        createTime: "2022-01-02T12:00:00",
      },
    };

    const result = compareCreators(creatorA, creatorB);

    expect(result).toBeLessThanOrEqual(1);
  });

  it("should correctly compare creators by most recent product (no product from B)", () => {
    const creatorA = {
      productCount: 3,
      mostRecentProduct: {
        id: "1",
        creatorId: "A",
        createTime: "2022-01-04T12:00:00",
      },
    };
    const creatorB = {
      productCount: 3,
      mostRecentProduct: null,
    };

    const result = compareCreators(creatorA, creatorB);

    expect(result).toBeLessThanOrEqual(1);
  });

  it("should return 0 if creators have the same product count and no most recent product", () => {
    const creatorA = { productCount: 3, mostRecentProduct: null };
    const creatorB = { productCount: 3, mostRecentProduct: null };

    const result = compareCreators(creatorA, creatorB);

    expect(result).toBe(0);
  });
});
