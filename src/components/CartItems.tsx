import { addToCart, type CartItem, removeFromCart } from "../store/cart.slice";
import { useCartDispatch, useCartSelector } from "../store/hooks";

export default function CartItems() {
  const { items } = useCartSelector((state) => state.cart);
  const dispatch = useCartDispatch();
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <p id="cart-total-price">
        Cart Total: <strong>{totalPrice}</strong>
      </p>
    </div>
  );
}
