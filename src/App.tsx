import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/Basic/NavBar";
import LandingPage from "./components/Basic/Landing/LandingPage";
import RegisterUser from "./components/Basic/Register/RegisterUser";
import axios from "axios";
import endpoints from "./enpoints";
import { BrowserRouter as Router, Route, Routes } from "react-router";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const getAllProperties = async () => {
      const response = await axios.get(endpoints.property.getAll());
      console.log(response.data);
      return response.data;
    };
    getAllProperties();
  }, []);

  return (
    <Router>
      <div className="flex h-screen w-full flex-col">
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterUser />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
