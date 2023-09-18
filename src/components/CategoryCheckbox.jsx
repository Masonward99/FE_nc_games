import { useEffect, useState } from "react"
import { getCategories } from "../utils/utils"

function CategoryCheckBox({setSelectedCategory}) {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getCategories()
            .then((cat) => {
                setCategories(cat)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return (
            <p>Loading</p>
        )
    }
    function handleChange(event) {
        setSelectedCategory(event.target.value)
    }
    return (
        <>
            <h2 className="checkboxHeading">Choose category:</h2>
            <form onChange={handleChange}>
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
export default CategoryCheckBox