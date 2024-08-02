
export default function ProductDetailPage({ product }) {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto">
      <img
        src={product.pdpImage1}
        alt={product.name}
        className="h-auto w-full max-w-md mb-4 rounded-md"
      />
      <div className="flex space-x-1 w-full max-w-md">
        <img
          src={product.pdpImage2}
          alt={product.name}
          className="h-auto w-1/2 rounded-md "
        />
        <img
          src={product.pdpImage3}
          alt={product.name}
          className="h-auto w-1/2 rounded-md"
        />
      </div>

    </div>
  );
}
