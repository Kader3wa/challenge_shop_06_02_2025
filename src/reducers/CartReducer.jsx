const CartReducer = (state, action) => {

    switch (action.type) {
        case ("ADD_PRODUCT"):
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case ("REMOVE_PRODUCT"): {
            return {
                ...state,
                products: state.products.filter((product) => product !== action.payload),
            }
        }

        case ("TOTAL"): {
            return {
                ...state,
                total: state.products.map((product) => product.prix++)
            }
        }

        default: return state;
    }

}

export default CartReducer;