import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Reviews from "./Pages/Reviews";
import SingleReview from "./Pages/SingleReview";
import Categories from "./Pages/Categories";
import FilteredReviews from "./Pages/FilteredReviews";
import SignIn from "./Pages/SignIn";
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import OwnProfile from "./Pages/OwnProfile";
import PostReview from "./Pages/PostReview";

function App() {  
  const {user} = useContext(UserContext)
  return (
    <div className="pageBox">
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview  />}
        />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reviews/category/:category" element={<FilteredReviews />} />
        <Route path="/login" element={user ? <OwnProfile /> : <SignIn />} />
        <Route path="/addreview" element={<PostReview/>}/>
      </Routes>
    </div>
  );
}

export default App;
