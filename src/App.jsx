import LoginPage  from "./components/LoginPage"
import { Routes, Route } from "react-router-dom";
import { useUserContext } from "./context/UserContext";
import SignUp from "./components/SignUp";
import Artwork from "./components/Artwork";
import NewArtwork from "./components/NewArtwork";
import BuyerDashboard from "./components/BuyerDashboard";

function App() {
  const { isLoggedIn } = useUserContext();

  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        {isLoggedIn && (
          <>
            <Route path="/artworks" element={<Artwork />} />
            <Route path="/create-artwork" element={<NewArtwork />} />
            <Route path="/artwork-menu" element={<BuyerDashboard />} />
          </>
        )}
        {/* {!isLoggedIn && <Route path="*" element={<Navigate to="/" />} />} */}
      </Routes>
  );
}

export default App;
