import { useCategories } from "../hooks/useCategories"

function CategoryCheckBox({ setSelectedCategory }) {
    const { categories, isLoading } = useCategories();
    {
        return isLoading ? 'Loading...' : (
            <>
                <h2 className="checkboxHeading">Choose category:</h2>
                <form onChange={e=> setSelectedCategory(e.target.value)}>
                    <input type="radio" name='catSelector' value={false} id="noCat" />
                    <label htmlFor="noCat" >All</label>
                    {categories.map(cat => {
                        return (
                            <div key={cat.slug}>
                                <input type="radio" name="catSelector" value={cat.slug} id={cat.slug} />
                                <label htmlFor={cat.slug}>{cat.slug}</label>
                            </div>
                        )
                    })}
                </form>
            </>
        )
    }
}
export default CategoryCheckBox