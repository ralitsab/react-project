import { useState, useEffect } from "react";
import { useProducts } from "./useProducts";

export const useSearch = (searchTerm) => {
  const { products, loading, error } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!loading && products.length > 0) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(lowercasedSearchTerm) ||
          product.id.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products, loading]);

  return { filteredProducts, loading, error };
};

