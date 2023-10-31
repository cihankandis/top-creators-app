import Product from "../../types/Product";

export const getProductCount = (
  products: Product[],
  creatorId: string
): number => {
  return products.filter((product) => product.creatorId === creatorId).length;
};

export const getMostRecentProduct = (
  products: Product[],
  creatorId: string
): Product | null => {
  const creatorProducts = products.filter(
    (product) => product.creatorId === creatorId
  );

  if (creatorProducts.length === 0) {
    return null;
  }

  return creatorProducts.reduce((prev, current) =>
    new Date(prev.createTime) > new Date(current.createTime) ? prev : current
  );
};

export const compareCreators = (
  a: { productCount: number; mostRecentProduct: Product | null },
  b: { productCount: number; mostRecentProduct: Product | null }
): number => {
  if (a.productCount !== b.productCount) {
    return b.productCount - a.productCount;
  }

  if (a.mostRecentProduct && b.mostRecentProduct) {
    return (
      new Date(b.mostRecentProduct.createTime).getTime() -
      new Date(a.mostRecentProduct.createTime).getTime()
    );
  } else if (!a.mostRecentProduct && b.mostRecentProduct) {
    return 1;
  } else if (a.mostRecentProduct && !b.mostRecentProduct) {
    return -1;
  }

  return 0;
};
