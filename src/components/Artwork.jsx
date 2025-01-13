import React, { useState, useEffect } from "react";
import { useUserContext } from "../context/UserContext";

const Artwork = () => {
  const { user, token } = useUserContext(); // Get the JWT token from context
  const [artworks, setArtworks] = useState([]); // State to store all artworks
  const [error, setError] = useState(null); // State to handle errors

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
  }, [token]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>My Artworks</h1>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            <h2>{artwork.title}</h2>
            <p>{artwork.description}</p>
            <p>Price: ${artwork.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artwork;
