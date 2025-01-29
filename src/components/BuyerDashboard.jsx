import { useUserContext } from "../context/UserContext"
import { useCartContext } from "../context/CartContext"
import { useState, useEffect } from 'react'
import { ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const BuyerDashboard = () => {
    const { user, token, logout } = useUserContext()
    const { cart, addToCart, removeFromCart } = useCartContext()
    const [artworks, setArtworks] = useState(null);
    const [error, setError] = useState();
    const [cartOpen, setCartOpen] = useState(false);
    
    useEffect(() => {
        const fetchArtworks = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/artworks/browse`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });
            console.log(response)
            if (!response.ok) {
            throw new Error("Failed to fetch artworks");
            }

            const data = await response.json();
            console.log(data)
            setArtworks(data);
        } catch (err) {
            setError(err.message);
        }
        };
        fetchArtworks();
    }, [token]);

    if (error) return <div>Error: {error}</div>;

    if (!artworks || artworks.length === 0) {
      return <div>No artworks available</div>;
    }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setCartOpen((prev) => !prev)}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
            </button>
            {cartOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg p-4 z-10">
                <h2 className="font-semibold text-lg mb-2">Shopping Cart</h2>
                {cart.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty</p>
                ) : (
                  <>
                    <ul className="space-y-4">
                      {cart.map((item) => (
                        <li
                          key={item.id}
                          className="flex justify-between items-center"
                        >
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-gray-600">
                              Price: ${item.price}
                            </p>
                            <p className="text-sm text-gray-600">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:underline"
                          >
                            <XIcon className="h-5 w-5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                    {/* Checkout Button */}
                    <Link to={"/checkout"}>
                    <button
                      className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                    >
                      Proceed to Checkout
                    </button>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Logout
          </button>
        </div>
      </div>
      <ul className="space-y-6">
        {artworks.map((artwork) => (
          <li
            key={artwork.id}
            className="p-4 border border-gray-300 rounded-lg shadow-sm flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                {artwork.title}
              </h2>
              <p className="text-sm text-gray-600">
                Description: {artwork.description}
              </p>
              <p className="text-sm text-gray-600">Price: ${artwork.price}</p>
            </div>
            <button
              onClick={() => addToCart(artwork)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuyerDashboard;