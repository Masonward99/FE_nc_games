import { useState } from "react";
import DownArrow from "../../../../components/icons/DownArrow";
import UpArrow from "../../../../components/icons/UpArrow";
import "./sortDropdown.css";
import Dropdown from "../../../../components/dropdown/Dropdown";

function SortDropdown({ setSort, sort, order, setOrder }) {
  const sortArray = ["created_at", "comment_count", "votes"]
  function handleButton(event) {
    event.preventDefault();
    if (event.target.value === "asc") {
      setOrder("desc");
    } else {
      setOrder("asc");
    }
  }

  return (
    <form className="dropdownForm">
      <Dropdown array={sortArray} item={sort} setItem={setSort}/>
      <button onClick={handleButton} value={order}>
        {order !== "desc" ? <UpArrow /> : <DownArrow />}
      </button>
    </form>
  );
}
export default SortDropdown;
