import { createContext,useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart,setCart] = useState(() =>{
      try {
        const storageCart = localStorage.getItem('cart')
        const storedCart = storageCart ? JSON.parse(storageCart) : []
        return storedCart
      } catch (error) {
        console.log(error)
        return []
      }
    }
      
    )
    const value  = {
      cart,
      setCart,
    };
  
    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  };