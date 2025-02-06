import { useReducer } from "react";
import { createContext } from "react";
import CartReducer from "../reducers/CartReducer";

export const CartContext = createContext(null);

export const initialCart = {
    products: []
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialCart)

    return (
        <CartContext.Provider value={{ state, dispatch }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;