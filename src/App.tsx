import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/Basic/NavBar";
import LandingPage from "./components/Basic/Landing/LandingPage";
import RegisterUser from "./components/Basic/Register/RegisterUser";
import axios, { AxiosResponse } from "axios";
import endpoints from "./enpoints";

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
    <div className="flex h-screen w-full flex-col">
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {!loggedIn && (
        <>
          {/* <LandingPage /> */}
          <RegisterUser />
        </>
        // <button
        //   onClick={() => setLoggedIn(true)}
        //   className="btn btn-primary mx-auto my-auto"
        // >
        //   Logga In
        // </button>
      )}
    </div>
  );
}

export default App;
