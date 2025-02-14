import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/Cartslices";
import { FlutterWaveButton } from "flutterwave-react-v3";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();
  const FLUTTER_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  // Calculate total amount
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  const config = {
    public_key: FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: totalAmount, // Use calculated total
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070**",
      name: "John Doe",
    },
    customizations: {
      title: "My Store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: `Pay ₦${totalAmount.toFixed(2)}`, // Update button text dynamically
    callback: (response) => {
      console.log("Payment response:", response);
      if (response.status === "successful") {
        dispatch(clearCart()); // Clear cart after successful payment
      }
      closePaymentModal();
    },
    onClose: () => {},
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-2">
              <span>{item.title} - ₦{item.price.toFixed(2)}</span>
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

      {cartItems.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Total: ₦{totalAmount.toFixed(2)}</h3>
          <FlutterWaveButton
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 mt-2"
            {...fwConfig}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
