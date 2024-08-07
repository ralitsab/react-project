import { useState, useContext, createContext, useEffect } from 'react';
import { addOrder } from '../services/ordersService';
import { useAuthProvider } from './authProvider';
import { useNavigate } from 'react-router-dom';

const CartContext = createContext();
export function CartProvider({ children }) {
const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

const placeOrder = async (currentUser) => {
    try {
      if(currentUser ) {
        await addOrder(
            cart,
            currentUser.uid
          );
        localStorage.removeItem('cart');
        setCart([])  
       
        }else {
            navigate("/login")
        }
    }catch(error){
       setErrors({submit: "Failed to place order. Try again."})
    }
    }


const removeProductFromCart = (productId) => {
    try {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    }catch {
        setErrors({removeProduct: "Failed to remove product. Try again"})
    }

}
  return (
    <CartContext.Provider value={{ cart, addToCart, placeOrder, removeProductFromCart, errors}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}