
export default function ProductDetailPage({ product }) {
  return (
    <div className="flex flex-col items-center">
      <img src={product.image} alt={product.name} className=" h-auto" />
      <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>
    </div>
  );
}