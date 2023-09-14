import { useEffect, useState } from "react"
import { getCategories } from "../utils/utils";

function CategoryDropDown({setSelectedCategory}) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then(cat => setCategories(cat))
    }, [])

    return (
        <div>
            <label htmlFor="categoryDropdown">Choose a category: </label>
            <select id="categoryDropdown" onChange={e=>setSelectedCategory(e.target.value)}>
                <option value={false}>Select category</option>
                {categories.map((cat) => <option value={cat.slug} key={cat.slug}>{cat.slug}</option>)}
            </select>
        </div>
    )
}
export default CategoryDropDown