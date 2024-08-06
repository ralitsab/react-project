import { useCart } from "../../../context/cartProvider"
import { useAuthProvider } from "../../../context/authProvider";

export default function OrderSummary() {
    const { cart, placeOrder, errors} = useCart();
    const { currentUser } = useAuthProvider();
    return (
        <div className="w-full md:w-1/4 bg-white p-6 shadow-lg rounded-lg mt-6 md:mt-0 md:ml-6">
        <h2 className="text-2xl font-bold mb-4 text-mainGreen">Order Summary</h2>
        <div className="mb-4">
          <p className="text-lg font-semibold">Total Items: {cart.length}</p>
          <p className="text-lg font-semibold">
            Total Price: ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
          </p>
        </div>
        <button
          onClick={() => placeOrder(currentUser)}
          className="w-full bg-mainGreen text-white font-bold py-2 px-4 rounded-lg hover:bg-hoverDarkGreen transition"
        >
          Submit Order
        </button>
        {errors && <p className="text-red-500 text-sm">{errors.submit}</p>}
      </div>
    )
}