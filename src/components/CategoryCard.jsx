function CategoryCard({category}) {
    return (
        <div className="catCard">
            <h2>{category.slug}</h2>
            <p>{category.description}</p>
        </div>
    )
}
export default CategoryCard