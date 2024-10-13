import { useCategories } from "../../hooks/useCategories";
import Dropdown from "../dropdown/Dropdown";

function CategoryDropDown({ setSelectedCategory, selectedCategory, className }) {
    const categories = JSON.parse(localStorage.getItem('categories'))
    if (!categories) {
        useCategories()
    }
    
    return !categories ? 'Loading...' : (
        <Dropdown array={categories} setItem={setSelectedCategory} item={selectedCategory} className={className}/>    
    )
    
}
export default CategoryDropDown