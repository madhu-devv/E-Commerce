import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function CartPage() {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="cart-container">
  <h2>Your Cart</h2>

  {cart.length === 0 ? (
    <p>Cart is empty</p>
  ) : (
    <div className="cart-grid">
      {cart.map((item) => (
        <div key={item.id} className="cart-card">
          <img src={item.image} className="cart-img" />
          <p>{item.title}</p>
          <p>Qty: {item.quantity}</p>
          <p>₹ {item.price}</p>
        </div>
      ))}
    </div>
  )}
  <p style={{position : "fixed", bottom : "50px", right : "200px", color : "black", background : "white", width : "150px", height : "30px", borderRadius : "5px"}}>Total : {total}</p>
</div>
  );
}

export default CartPage;