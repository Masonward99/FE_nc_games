import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Reviews from "./Pages/Reviews";
import SingleReview from "./Pages/SingleReview";
import SignIn from "./Pages/SignIn";
import Categories from "./Pages/Categories";
import FilteredReviews from "./Pages/FilteredReviews";

function App() {
  return (
    <div>
      <h1>nc_games</h1>
      <Nav/>
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview />}
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reviews/category/:category" element={<FilteredReviews />} />
      </Routes>
    </div>
  );
}

export default App;
