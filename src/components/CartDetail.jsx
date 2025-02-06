import { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/CartContext"

const CartDetail = () => {
    const cartContext = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [reduction, setReduction] = useState(0);

    useEffect(() => {
        let total = 0;
        let reduction = 0;
        cartContext.state.products.forEach((product) => {
            total += product.prix;
            if (total > 100) {
                reduction = total * 0.1;
                setReduction(reduction);
            } else {
                setReduction(0);
            }
        })
        setTotal(total);
    }, [cartContext.state.products, total, reduction])

    const handleRemoveToCart = (index) => {
        cartContext.dispatch({
            type: "REMOVE_PRODUCT",
            payload: index
        })
    }

    return (
        <>
            {cartContext.state.products.length > 0 &&
                <section id="cart-details">
                    <h2>Détails du panier
                        <span className="badge total">
                            {total > 100 ? total - reduction : total} € dont {reduction} € de réduction
                        </span>
                    </h2>
                    <div className="products">
                        {
                            cartContext.state.products.map((product, index) => {
                                return (
                                    <div className="card" key={index}>
                                        <img src={product.image} alt={product.nom} className="card-img" />
                                        <div className="card-content">
                                            <span>
                                                {product.nom}
                                            </span>
                                            <span className="badge">
                                                {product.prix} €
                                            </span>
                                        </div>
                                        <button className="btn-add-cart" onClick={() => handleRemoveToCart(index)}>
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