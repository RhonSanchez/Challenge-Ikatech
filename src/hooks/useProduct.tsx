import { useEffect, useState } from "react";
import { getProducts } from "../services/products";
import { ProductDTO } from "../types/products";

export const useProducts = () => {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const getAllProducts = async (): Promise<void> => {
    const resp = await getProducts();
    setProducts(resp);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return {
    products,
    getAllProducts,
  };
};
