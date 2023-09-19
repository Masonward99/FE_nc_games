import { useCategories } from "../hooks/useCategories";

function CategoryDropDown({ setSelectedCategory }) {
    const { categories, isLoading } = useCategories();
    
    {
        return isLoading ? 'Loading...' : (
            <div className="catDd">
                <label htmlFor="categoryDropdown">Choose a category: </label>
                <select id="categoryDropdown" onChange={e => setSelectedCategory(e.target.value)}>
                    <option value={false}>Select category</option>
                    {categories.map((cat) => <option value={cat.slug} key={cat.slug}>{cat.slug}</option>)}
                </select>
            </div>
        )
    }
}
export default CategoryDropDown