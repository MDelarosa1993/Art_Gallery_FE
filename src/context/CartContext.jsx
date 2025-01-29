import { createContext, useContext, useState } from "react"


const CartContext = createContext(null)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (artwork) => {
        setCart((prevCart) => {
            const existingCart = prevCart.find((item) => item.id === artwork.id);
            if(existingCart) {
                return prevCart.map((item) => 
                item.id === artwork.id
            ? { ...item, quantity: item.quantity + 1}
            : item
        )
            } else {
                return [...prevCart, { ...artwork, quantity: 1}]
            }
        })
    }

    const removeFromCart = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
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