import { useCategories } from "../../../../hooks/useCategories";
import "./ReviewSorting.css"

function CategoryCheckBox({ setSelectedCategory }) {
    const categories = JSON.parse(localStorage.getItem('categories'))
    if (!categories) {
        useCategories();
    }
    {
        return !categories ? (
          "Loading..."
        ) : (
            <div className="category-checkbox ui">
                <h2 className="category-checkbox-name">Category:</h2>
                <form onChange={(e) => setSelectedCategory(e.target.value)}>
                    <input
                        type="radio"
                        name="catSelector"
                        value={categories[0]}
                        id="noCat"
                        defaultChecked
                    />
                    <label htmlFor="noCat" className="category-checkbox-name">{categories[0]}</label>
                    {categories.slice(1).map((cat) => {
                        return (
                            <div key={cat}>
                                <input
                                    type="radio"
                                    name="catSelector"
                                    value={cat}
                                    id={cat}
                                />
                                <label htmlFor={cat} className="catergory-checkbox-name">{cat}</label>
                            </div>
                        );
                    })}
                </form>
          </div>
        );
    }
}
export default CategoryCheckBox