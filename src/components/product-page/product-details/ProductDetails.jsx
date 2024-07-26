export default function ProductDetailPage({ product }) {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto">
      <img
        src={product.image2_pdp}
        alt={product.name}
        className="h-auto w-full max-w-md mb-4"
      />
      <div className="flex space-x-1 w-full max-w-md">
        <img
          src={product.image2_pdp}
          alt={product.name}
          className="h-auto w-1/2"
        />
        <img
          src={product.image2_pdp}
          alt={product.name}
          className="h-auto w-1/2"
        />
      </div>
    </div>
  );
}
