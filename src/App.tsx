import { useState } from "react";
import "./App.css";
import NavBar from "./components/Basic/NavBar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="flex h-screen w-full flex-col">
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {!loggedIn && (
        <button
          onClick={() => setLoggedIn(true)}
          className="btn btn-primary mx-auto my-auto"
        >
          Logga In
        </button>
      )}
    </div>
  );
}

export default App;
