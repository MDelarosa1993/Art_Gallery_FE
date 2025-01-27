import React, { useState, useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
const Artwork = () => {
  const { user, token, logout } = useUserContext();
  const [artworks, setArtworks] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/users/${user.id}/artworks`, {
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
  }, [user, token]);

  if (error) return <div>Error: {error}</div>;

return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Masterpieces</h1>
          <button
            onClick={logout}
            className="bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
        <div className="mb-6 text-center">
          <Link to="/create-artwork">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Feeling Inspired
            </button>
          </Link>
        </div>
        <ul className="space-y-6">
          {artworks.map((artwork) => (
            <li
              key={artwork.id}
              className="p-4 border border-gray-300 rounded-lg shadow-sm"
            >
              <h2 className="text-lg font-semibold text-gray-700">
                {artwork.title}
              </h2>
              <p className="text-sm text-gray-600">
                Description: {artwork.description}
              </p>
              <p className="text-sm text-gray-600">Price: ${artwork.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Artwork;
