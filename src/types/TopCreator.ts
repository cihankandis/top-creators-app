import Product from "./Product";
import User from "./User";

type TopCreator = {
  user: User;
  productCount: number;
  mostRecentProduct: Product | null;
};

export default TopCreator;
