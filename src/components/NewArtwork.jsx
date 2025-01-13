import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useState } from "react";

const NewArtwork = () => {
    const { user, token } = useUserContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const createArtwork = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch(`http://localhost:3000/api/v1/users/${user.id}/artworks`,{
                method: "POST",
                headers: { "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ artwork: { title, description, price } }),
            });

            console.log(response)
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.errors || 'Sign-Up Failed');
            }
            setTitle('');
            setDescription('');
            setPrice('');
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create New Artwork
        </h1>
        <form onSubmit={createArtwork} className="space-y-6">
            <div>
            <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
            >
                Title:
            </label>
            <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            </div>
            <div>
            <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
            >
                Description:
            </label>
            <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            </div>
            <div>
            <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
            >
                Price:
            </label>
            <input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            </div>
            <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            Fullfilled
            </button>
            {error && (
            <p className="text-sm text-red-600 text-center mt-2">{error}</p>
            )}
        </form>
            <Link to="/artworks">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4">
                    Back to Artworks
                </button>
            </Link>
        </div>
    </div>
    );

}

export default NewArtwork;