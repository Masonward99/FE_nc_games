import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Reviews from "./Pages/Reviews/Reviews";
import SingleReview from "./Pages/SingleReview/SingleReview";
import SignIn from "./Pages/SignIn";
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import PostReview from "./Pages/PostReview/PostReview";
import Profile from "./Pages/Profile/Profile";
import OwnProfile from "./Pages/Profile/OwnProfile";
import Footer from "./components/Footer/footer";

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/login" element={user ? <OwnProfile /> : <SignIn />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/addreview" element={<PostReview />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
