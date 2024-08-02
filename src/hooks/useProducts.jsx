import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config.js";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollectionRef = collection(db, "products");
        const querySnapshot = await getDocs(productsCollectionRef);
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
        setError("");
      } catch (error) {
        setError("Error fetching products");

      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, error, loading };
};

export const useProduct = (productId) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        try {
          const productDocRef = doc(db, "products", productId);
          const productDoc = await getDoc(productDocRef);
          if (productDoc.exists()) {
            setSelectedProduct({ id: productDoc.id, ...productDoc.data() });
            setError("");
          } else {
            setError("Product not found");
          }
        } catch (error) {
          setError("Error fetching product");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProduct();
  }, [productId]);

  return { selectedProduct, error, loading };
};
