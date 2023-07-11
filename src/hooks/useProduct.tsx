import { useEffect, useState } from "react";
import { getProducts } from "../services/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

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
