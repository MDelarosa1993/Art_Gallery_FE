import { useUserContext } from "../context/UserContext"
import { useState, useEffect } from 'react'

const BuyerDashboard = () => {
    const { token, logout } = useUserContext()
    const [artworks, setArtworks] = useState(null);
    const [error, setError] = useState();
    
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
    <div>
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
  )
}

export default BuyerDashboard;