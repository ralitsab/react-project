import { createContext, useContext } from "react";
const CartContext = createContext();


export const useCart = () => {
    return useContext(CartContext);
  };

  
export const CartProvider = ({children}) => {
const [cartItems, setCartItems] = useState([])



}