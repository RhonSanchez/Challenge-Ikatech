import db from "../db/db.json";
import { ProductDTO } from "../types/products";

export const getValidationProducts = (): ProductDTO[] => {
  return db.products as ProductDTO[];
};

export const getProducts = async (): Promise<ProductDTO[]> => {
  const data = await getValidationProducts();
  return data as ProductDTO[];
};
