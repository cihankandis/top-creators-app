import getCreatorsProductsData from "../api/getCreatorsProductsData";
import TopCreator from "../types/TopCreator";
import {
  compareCreators,
  getMostRecentProduct,
  getProductCount,
} from "./utils/dataUtils";

/**
 * Returns the top N active creators from the API endpoint.
 * @param numberOfCreators - The number of top active creators to be fetched.
 * @returns An Observable containing data of the top N active creators.
 */
export const getTopNActiveCreators = (
  numberOfCreators: number = 3
): Promise<TopCreator[]> => {
  return new Promise((resolve, reject) => {
    getCreatorsProductsData()
      .then((data) => {
        const creatorsWithStats = data.Creators.map((creator) => {
          const productCount = getProductCount(data.Products, creator.id);
          const mostRecentProduct = getMostRecentProduct(
            data.Products,
            creator.id
          );
          return { user: creator, productCount, mostRecentProduct };
        });

        creatorsWithStats.sort(compareCreators);

        resolve(creatorsWithStats.slice(0, numberOfCreators));
      })
      .catch(() => {
        reject(new Error("Failed to fetch data from the API"));
      });
  });
};
