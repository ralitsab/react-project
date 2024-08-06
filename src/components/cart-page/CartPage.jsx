import { useCart } from "../../context/cartProvider";
import ProductCardItem from "../product-page/product-details/ProductCardItem";
import OrderSummary from "./order-summary/OrderSummary";

export default function CartPage() {
  const { cart, removeProductFromCart, errors} = useCart()
  return (
    <div className="mx-auto p-4 bg-[#A7D1C5] min-h-screen flex flex-col md:flex-row">
    <div className="flex-1">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((product) => (
         <div
         key={product.id}
         className="relative wrap rounded-lg bg-white shadow-md p-4 flex flex-col"
       >
         <button
           onClick={() => removeProductFromCart(product.id)}
           className="absolute top-2 right-2 bg-mainGreen text-white rounded-full w-8 h-8 flex items-center justify-center"
         >
           X
         </button>
         <ProductCardItem {...product} />
         <div className="mt-4 border-t pt-2 text-center">
           <p className="text-lg font-semibold text-mainGreen">
             ${product.price.toFixed(2)}
           </p>
         </div>
       </div>
       
          ))}
          {errors && <p className="text-red-500 text-sm">{errors.removeProduct}</p>}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="antialiased m-0 p-0 font-black font-display text-5xl md:text-6xl text-mainGreen text-center">
            No items in your cart
          </h1>
        </div>
      )}
    </div>
<OrderSummary/>
  </div>
  )
}