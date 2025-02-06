import { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/CartContext"

const CartDetail = () => {
    const cartContext = useContext(CartContext);

    const handleRemoveToCart = (product) => {
        cartContext.dispatch({
            type: "REMOVE_PRODUCT",
            payload: product
        })
    }

    return (
        <>
            <section id="cart-details">
                <h1>Détails du panier</h1>
                <h2 className="badge"></h2>
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
        </>
    );
}

export default CartDetail