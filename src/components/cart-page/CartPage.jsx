export default function CartPage() {

      return (
        <div className="container mx-auto p-8 space-y-6 max-w-4xl">
          <h2 className="antialiased m-0 p-0 font-black font-display text-5xl md:text-6xl text-[#14433D] text-center">
            Your Cart
          </h2>
          
          <div className="space-y-6">
           
              <p className="text-center text-lg text-gray-700">Your cart is empty.</p>
          </div>
          
        </div>
      );
    }