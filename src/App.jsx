import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Reviews from "./Pages/Reviews";
import SingleReview from "./Pages/SingleReview";

function App() {
  return (
    <div>
      <h1>nc_games</h1>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview />}
        />
      </Routes>
    </div>
  );
}

export default App;
