import { useState } from "react";
import { getCategories } from "../utils/utils";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";

function Categories() {
    const [categories, setCategories] = useState([])
    getCategories()
        .then(data => setCategories(data))
    return (
        <div>
            <h2>Categories</h2>
            <ul>
                 {categories.map((cat) => {
                     return <li key={cat.slug}><Link to={`/reviews/category/${cat.slug}`}><CategoryCard category={cat}/></Link></li>
            })}
            </ul>
           
        </div>
    )
}
export default Categories