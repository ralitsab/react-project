import { useParams } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import ProductCardItem from "../product-page/product-details/ProductCardItem";
import Loader from "../loader/Loader";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const { filteredProducts, loading, error } = useSearch(searchTerm);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className=" mx-auto p-4 bg-[#A7D1C5] min-h-[600px]">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCardItem key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[600px]">
            <h1 className="antialiased m-0 p-0 font-black font-display text-5xl md:text-6xl text-mainGreen text-center">
              No products found
            </h1>
          </div>


      )}
    </div>
  );
};

export default SearchResults;
