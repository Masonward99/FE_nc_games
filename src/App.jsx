import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Reviews from "./Pages/Reviews";
import SingleReview from "./Pages/SingleReview";
import Categories from "./Pages/Categories";
import FilteredReviews from "./Pages/FilteredReviews";
import SignIn from "./Pages/SignIn";
import { useState } from "react";

function App() {  
  const [user, setUser]=useState('0')
  return (
    <div>
      <div className="pageTitle">
      <h1>nc_games</h1>
      <Nav user={user} />
      </div>
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview user={user} />}
        />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reviews/category/:category" element={<FilteredReviews />} />
        <Route path="/login" element={<SignIn setUser={setUser} />}/>
      </Routes>
    </div>
  );
}

export default App;
