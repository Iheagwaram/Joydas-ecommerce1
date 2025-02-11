import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cartdropdown = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="relative group">
      <button className="relative p-2 bg-gray-200 rounded-full">
        🛒
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>

      <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-sm">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.title}</span>
                <span>x{item.quantity}</span>
              </li>
            ))}
          </ul>
        )}

        {cartItems.length > 0 && (
          <Link to="/cart">
            <button className="mt-2 w-full bg-black text-white py-1 rounded-md">
              View Cart
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cartdropdown;
