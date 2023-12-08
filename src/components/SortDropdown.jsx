function SortDropdown ({ setSort, order, setOrder}){ 
    function handleChange(event) {
        setSort(event.target.value)
    }
    function handleButton(event) {
        event.preventDefault()
        if (event.target.value === 'asc') {
            setOrder('desc')
        } else {
            setOrder('asc')
        }
    }
    return (
        <form className="dropdownForm">
            <label htmlFor='sortDropdown' className="ddLabel">Sort by: </label>
            <select id="sortDropdown" onChange={handleChange}>
                <option value="created_at">Date</option>
                <option value="comment_count">Comments</option>
                <option value="votes">Votes</option>
            </select>
            <button onClick={handleButton} value={order}>{order!=="desc" ? "⬆️" : "⬇️"}</button>
        </form>
    )
}
export default SortDropdown
