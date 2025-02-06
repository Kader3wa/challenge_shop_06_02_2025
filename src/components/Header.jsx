import { useContext } from "react";
import CartIcon from "../assets/cart.png"
import { CartContext } from "../contexts/CartContext";

const Header = () => {

    const cartContext = useContext(CartContext);

    return (
        <>
            <header>
                <div className="logo">
                    <h1>Shop</h1>
                </div>
                <div className="cart">
                    <a href="#cart">
                        <img src={CartIcon} alt="Shop" />
                        <span className="badge cart-size">
                            {cartContext.state.products.length}
                        </span>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header;