import { createContext, useContext, useState } from "react"


const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (artwork) => {
        setCart((prevCart) => [...prevCart, artwork])
    }

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((artwork) => artwork.id !== id))
    }

    const value = {
        cart,
        addToCart,
        removeFromCart
    }

    return (
        <CartContext.Provider value={ value }>
            { children }
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
}

export default CartProvider;