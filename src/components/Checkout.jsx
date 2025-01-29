import { useCartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, removeFromCart } = useCartContext();
  const navigate = useNavigate();

  const handlePurchase = () => {
    alert("Purchase successful! Thank you for your order.");
    removeFromCart();
    navigate("/");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">Price: ${item.price}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="font-bold mt-4">
            Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </p>
          <button
            onClick={handlePurchase}
            className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Confirm Purchase
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
