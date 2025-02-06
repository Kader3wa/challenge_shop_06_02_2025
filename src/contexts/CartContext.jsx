import { useReducer } from "react";
import { createContext } from "react";
import CartReducer from "../reducers/CartReducer";

export const CartContext = createContext(null);

export const initialCart = {
    products: [],
    totalPrice: 0,
    reduction: 0
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