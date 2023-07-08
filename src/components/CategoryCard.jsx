function CategoryCard({category}) {
    return (
      <div className="catCard">
        <h2>{category.slug}</h2>
        <p>{category.description}</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_2KJjeIbznu0Sg-mf55vqjuhzsHycpgh8w&usqp=CAU" />
      </div>
    );
}
export default CategoryCard