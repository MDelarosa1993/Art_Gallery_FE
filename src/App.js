import LoginPage  from "./components/LoginPage"
import { Routes, Route } from "react-router-dom";
import { useUserContext } from "./context/UserContext";

function App() {
  const { isLoggedIn } = useUserContext();

  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* {isLoggedIn && ( */}
          <>
            {/* <Route path="/artworks" element={<ArtworksPage />} />
            <Route path="/admin" element={<AdminPage />} /> */}
          </>
        {/* )} */}
        {/* {!isLoggedIn && <Route path="*" element={<Navigate to="/" />} />} */}
      </Routes>
  );
}

export default App;
