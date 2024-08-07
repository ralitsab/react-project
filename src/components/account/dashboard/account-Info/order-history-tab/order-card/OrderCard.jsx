
const OrderCard = ({ order }) => {
    const totalPrice = order.products.reduce((total, product) => total + product.price, 0);
  
    return (
      <div className="order-card p-6 mb-4 rounded-2xl bg-[#C9DFDA] shadow-lg">
        <h3 className="text-xl font-bold mb-2 text-mainGreen">
          Order ID: {order.id}
        </h3>
        <p className="text-base mb-2 text-mainGreen">
          Placed on: {new Date(order.createdAt.seconds * 1000).toLocaleDateString()}
        </p>
        <div className="order-items">
          <h4 className="text-lg font-semibold text-mainGreen mb-2">Items:</h4>
          {order.products.map((product, index) => (
            <div key={index} className="mb-2">
              <p className="text-base text-mainGreen">
                Product: {product.name} - ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-gray-300 pt-2">
          <p className="text-lg font-semibold text-mainGreen">
            Total: ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    );
  };
  
  export default OrderCard;