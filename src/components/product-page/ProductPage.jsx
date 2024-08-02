
import { useParams } from "react-router-dom";
import ProductDetailPage from "./product-details/ProductDetails";
import ProductCardItem from "./product-details/ProductCardItem";
import CommentSection from "./comment-section/CommentSection";
import Loader from "../loader/Loader";
import { useProduct, useProducts } from "../../hooks/useProducts";
export default function ProductPage() {
  const { productId } = useParams();
  const { products, error: productsError, loading: productsLoading } = useProducts();
  const { selectedProduct, error: productError, loading: productLoading } = useProduct(productId);

if(productLoading) {
  return <Loader/>
}
 
  return (
    <div className="product-page"
    style={{
      backgroundColor: selectedProduct.color,
      transition: "all .5s ease",
    }}>
    <div
      className=" mx-auto p-10 pt-20 flex flex-col md:flex-row"
    >
      <div className="flex-1 md:pr-10">
        {selectedProduct ? (
          <ProductDetailPage product={selectedProduct} />
        ) : (
         <Loader/>
        )}
      </div>

      <div className="flex-1 mb-10">
        <div className="text-content pb-10">
          <h1 className="text-[#14433D] font-bold  mb-2 font-display text-4xl font-black md:text-6xl">
            {selectedProduct.name}
          </h1>
          <p className="mt-2 text-[#14433D]">{selectedProduct.description}</p>
          <p className="mt-2 text-[#14433D] font-bold text-xl font-black md:text-2xl ">
            ${selectedProduct.price}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-20 rounded-lg bg-white p-10">
          {products.map((product) => (
            <ProductCardItem key={product.id} {...product} />
          ))}
        </div>


        <div className="button-add-to-basket text-center">
          <button
            to="/register"
            type="button"
            className="border-solid rounded-full font-bold text-lg text-center bg-[#14433D] text-white pt-5 pb-5 pl-10 pr-10 mb-8 transition ease-in-out delay-150 hover:bg-[#14433D] hover:text-white duration-300"
          >
            {`Add to cart  $${selectedProduct.price}`}
          </button>
        </div>
      </div>
    </div>
    <CommentSection productId={productId}></CommentSection>
    </div>
  );
}
