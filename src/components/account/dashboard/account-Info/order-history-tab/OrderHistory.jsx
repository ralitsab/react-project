import { useOrders } from "../../../../../hooks/useOrders";
import { useAuthProvider } from "../../../../../context/authProvider";
import Loader from "../../../../loader/Loader";
import OrderCard from "./order-card/OrderCard";
const OrderHistory = () => {
    const { userProfile, currentUser } = useAuthProvider();
  const { orders, loading, error } = useOrders(currentUser.uid);

  if (loading) {
    return <Loader></Loader>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="order-history flex flex-col lg:flex-row gap-6 p-6">
    <div className="order-details flex-1">
      <h2 className="text-2xl font-semibold mb-4 text-mainGreen">
        Order History
      </h2>
      {orders.length > 0 ? (
        <div className="order-list">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[300px]">
          <h1 className="antialiased m-0 p-0 font-black font-display text-5xl md:text-6xl text-mainGreen text-center">
            No orders found
          </h1>
        </div>
      )}
    </div>
  </div>


);
};


export default OrderHistory;