import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import ProductDetailPage from './product-details/ProductDetails';
import ProductCardItem from './product-details/ProductCardItem'

export default function ProductPage() {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollectionRef = collection(db, 'products');
        const querySnapshot = await getDocs(productsCollectionRef);
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
        ...doc.data()
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        try {
          const productDocRef = doc(db, 'products', productId);
          const productDoc = await getDoc(productDocRef);
          if (productDoc.exists()) {
            setSelectedProduct({ id: productDoc.id, ...productDoc.data() });
          }
        } catch (error) {
          console.error("Error fetching product: ", error);
        }
      }
    };

    fetchProduct();
  }, [productId])

  console.log(selectedProduct.color)

  return (
    <div className="product-page mx-auto pt-10 flex" style={{backgroundColor: selectedProduct.color, transition: "all .5s ease" }}>
      <div className="flex-1">
        {selectedProduct ? <ProductDetailPage product={selectedProduct} /> : <p>Loading...</p>}
      </div>

      <div className="flex-1">
        <div className='text-content pb-10'>
      <h1 className="text-2xl text-[#14433D] font-bold mt-4 mb-2 font-display text-4xl font-black md:text-6xl">{selectedProduct.name}</h1>
      <p className="mt-2 text-[#14433D]">{selectedProduct.description}</p>
      </div>
        <div className="grid grid-cols-2 gap-4 mb-20 rounded-lg">
          {products.map(product => (
            <ProductCardItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}