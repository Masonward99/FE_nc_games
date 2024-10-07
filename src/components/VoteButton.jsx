import { useState } from "react"
import { patchVotes } from "../utils/utils"
import DownArrow from "./icons/DownArrow"
import UpArrow from "./icons/UpArrow"
import './css/voteButton.css'

function VoteButton({  id, count, type }) {
    const [incCount, setIncCount] = useState(0)
    function changeVotes(event) {
        event.preventDefault()
        if (incCount === 0 && event.target.value === '+') {
            patchVotes(id,  1, type)
            setIncCount(1)
        } else if (incCount === -1 && event.target.value === '+') {
            patchVotes(id,  2, type)
            setIncCount(1)
        } else if (incCount === 0 && event.target.value === '-') {
            patchVotes(id,  -1, type)
            setIncCount(-1)
        } else if (incCount === 1 && event.target.value === '-') {
            patchVotes(id,  -2, type)
            setIncCount(-1)
        }
        else if (incCount === 1 && event.target.value === '+') {
            patchVotes(id,  -1, type)
            setIncCount(0)
        } else if (incCount === -1 && event.target.value === '-') {
            patchVotes(id, 1, type)
            setIncCount(0)
        }
    }
    return (
        <div  className={incCount >0 ? 'voteButtons upSelected' : incCount <0? 'voteButtons downSelected': 'voteButtons'} >
            <button onClick={changeVotes} value='+'><UpArrow/></button>
            <p>{count+incCount}</p>
            <button onClick={changeVotes} value='-'><DownArrow /></button>
        </div>
    )
}
export default VoteButton