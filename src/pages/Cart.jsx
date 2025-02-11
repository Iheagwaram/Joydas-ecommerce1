import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/Cartslices"; 


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();
  return (
    <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul className="space-y-4">
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center border-b pb-2">
            <span>{item.title} (x{item.price})</span>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}

    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Proceed to Checkout</button>
  </div>
);
};

export default Cart;
