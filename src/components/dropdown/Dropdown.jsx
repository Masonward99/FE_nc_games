import { useRef, useState } from 'react'
import './Dropdown.css'
function Dropdown({ array, item, setItem, className }) {
    const list = useRef(null)
    function toggleDropdown(event) {
        if (event) {
            event.preventDefault();
        }
        if (
            list.current.style.display === "none" ||
            list.current.style.display === ""
        ) {
            list.current.style.display = "block";
        } else {
            list.current.style.display = "none";
        }
    }
    function changeIndex(item) {
        setItem(item)
        toggleDropdown()
    }
    return (
        <div className={className}>
            <div className="dropdown ui">
                <button onClick={(event)=>toggleDropdown(event)} className='dropdown-button'>{item}</button>
                <ul className='dropdown-list' ref={list}>
                    {array.map((element, index) => <li key={index} className='dropdown-item' onClick={()=>changeIndex(element)}>{element}</li>)}
                </ul>
            </div>
        </div>
    )
}
export default Dropdown