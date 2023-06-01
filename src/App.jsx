import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Reviews from "./Pages/Reviews";
import SingleReview from "./Pages/SingleReview";
import SignIn from "./Pages/Signin";
import { useState } from "react";

function App() {
  
  const [user, setUser]=useState(0)
  return (
    <div>
      <h1>nc_games</h1>
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview user={user} />}
        />
        <Route path="/login" element={<SignIn setUser={setUser} />}/>
      </Routes>
    </div>
  );
}

export default App;
