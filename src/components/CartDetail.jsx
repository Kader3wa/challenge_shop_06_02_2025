import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

const CartDetail = () => {
    const cartContext = useContext(CartContext);

    const totalCart = () => {
        return cartContext.state.products.reduce((acc, product) => acc + product.prix, 0) + " €";
    }

    const handleRemoveToCart = (product) => {
        cartContext.dispatch({
            type: "REMOVE_PRODUCT",
            payload: product
        })
    }

    return (
        <>
            {cartContext.state.products.length > 0 &&
                <section id="cart-details">
                    <h2>Détails du panier
                        <span className="badge total">
                            {totalCart()}
                        </span>
                    </h2>
                    <div className="products">
                        {
                            cartContext.state.products.map((product) => {
                                return (
                                    <div className="card" key={product.id}>
                                        <img src={product.image} alt={product.nom} className="card-img" />
                                        <div className="card-content">
                                            <span>
                                                {product.nom}
                                            </span>
                                            <span className="badge">
                                                {product.prix} €
                                            </span>
                                        </div>
                                        <button className="btn-add-cart" onClick={() => handleRemoveToCart(product)}>
                                            Retirer
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            }
        </>
    );
}

export default CartDetail