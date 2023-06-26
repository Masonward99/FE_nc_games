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
        <form>
            <label for='sortDropdown'>sort by: </label>
            <select id="sortDropdown" onChange={handleChange}>
                <option value="created_at">Date</option>
                <option value="comment_count">comments</option>
                <option value="votes">votes</option>
            </select>
        <button onClick={handleButton} value={order}>{order!=="desc" ? "⬆️" : "⬇️"}</button>
      </form>
    )
}
export default SortDropdown
