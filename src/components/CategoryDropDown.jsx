import { useCategories } from "../hooks/useCategories";

function CategoryDropDown({ setSelectedCategory, className }) {
    const categories = JSON.parse(localStorage.getItem('categories'))
    if (!categories) {
        useCategories()
    }
    {
        return !categories ? 'Loading...' : (
            <div className="catDd ui">
                <label htmlFor="categoryDropdown" className="visually-hidden">Category: </label>
                <select id="categoryDropdown" onChange={e => setSelectedCategory(e.target.value)}>
                    <option value={false}>Select category</option>
                    {categories.map((cat) =><option value={cat.slug} key={cat.slug}>{cat.slug}</option>)}
                </select>
            </div>
        )
    }
}
export default CategoryDropDown