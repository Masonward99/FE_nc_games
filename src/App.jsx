import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Reviews from "./Pages/Reviews";
import SingleReview from "./Pages/SingleReview";
import SignIn from "./Pages/SignIn";
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import PostReview from "./Pages/PostReview";
import Profile from "./Pages/Profile";

function App() {  
  const {user} = useContext(UserContext)
  return (
    <>
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview  />}
        />
        <Route path="/login" element={user ? <Profile /> : <SignIn />} />
        <Route path="/profile/:username" element={<Profile/>}/>
        <Route path="/addreview" element={<PostReview/>}/>
      </Routes>
    </>
  );
}

export default App;
