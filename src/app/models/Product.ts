import { Category } from "./Category";

export interface Product {
  id?: number;
  name: string;
  description: string;
  header: string;
  categories: Array<Category>;
  image: any;
}
