import { useContext } from "react"
import products from "../data/products"
import { CartContext } from "../contexts/CartContext"

const Products = () => {

    const cartContext = useContext(CartContext);

    const handleAddToCart = (product) => {
        cartContext.dispatch({
            type: "ADD_PRODUCT",
            payload: product
        })
    }

    return (
        <>
            <section>
                <h1>Liste des produits</h1>
                <div className="products">
                    {
                        products.map((product) => {
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
                                    <button className="btn-add-cart" onClick={() => handleAddToCart(product)}>
                                        Ajouter
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Products;