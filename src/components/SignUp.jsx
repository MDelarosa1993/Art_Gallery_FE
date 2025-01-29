import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const { login } = useUserContext();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('artist');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch("http://localhost:3000/api/v1/users", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ user: { name, email, password, role } }),
            });
            console.log(response)
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.errors || 'Sign-Up Failed');
            }
            const data = await response.json();
            const userData = {
              id: data.user.data.id,
              name: data.user.data.attributes.name,
              email: data.user.data.attributes.email,
              role: data.user.data.attributes.role,
            };
            console.log(data)
            login(userData, data.token);
            navigate("/")
        } catch (error) {
            setError(error.message);
        }
    }
return (
  <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h1>
      <form onSubmit={handleSignUp} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Role:
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="artist">Artist</option>
            <option value="buyer">Buyer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
        {error && (
          <p className="text-sm text-red-600 text-center mt-2">{error}</p>
        )}
      </form>
    </div>
  </div>
);

}

export default SignUp;