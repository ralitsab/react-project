import { Link } from "react-router-dom";

export default function ProductCardItem({
  id,
  name,
  description,
  imageItem,
  color,
})  {

  return (
    <Link
      to={`/products/${id}`}
      className="border rounded-lg overflow-hidden block"
    >
      <img
        src={imageItem}
        alt={name}
        className="w-full h-32 object-contain"  
         style={{
          backgroundColor: color,
        }}
      />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
