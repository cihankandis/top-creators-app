import Product from "../../types/Product";

/**
 * Returns the count of products for a specific creator
 * @param products - The array of products to be searched
 * @param creatorId - The ID of the creator
 * @returns The count of products for the given creator
 */
export const getProductCount = (
  products: Product[],
  creatorId: string
): number => {
  return products.filter((product) => product.creatorId === creatorId).length;
};

/**
 * Returns the most recent product of specific creator
 * @param products - The array of products to be searched
 * @param creatorId - The ID of the creator
 * @returns The most recent product created by the given creator ID or null if no product found
 */
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

/**
 * Compares two creators based on their product count and most recent product
 * @param a - The first creator object to be compared
 * @param b - The second creator object to be compared
 * @returns 1 if 'b' should be ranked higher, -1 if 'a' should be ranked higher, 0 if they're equivalent
 */
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
