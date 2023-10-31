import axios from "axios";
import User from "../types/User";
import Product from "../types/Product";

const BASE_URL =
  process.env.REACT_APP_BASE_URL ||
  "https://gist.githubusercontent.com/gabrielpscf/5c571687d5f11b68fd8cfbf990387f8b/raw/6891813ac5ecb0b9b9308c8ccd9bd3a97c456107/data.json";

export type CreatorsProductsData = {
  Creators: User[];
  Products: Product[];
};

export const getCreatorsProductsData =
  async (): Promise<CreatorsProductsData> => {
    try {
      const response = await axios.get<CreatorsProductsData>(BASE_URL);
      return response.data;
    } catch (error: unknown) {
      throw new Error("Failed to fetch data from the API");
    }
  };

export default getCreatorsProductsData;
