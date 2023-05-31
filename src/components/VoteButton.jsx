import { useState } from "react"
import { patchVotes } from "../utils/utils"

function VoteButton({ type, id, count }) {
    const [incCount, setIncCount] = useState(0)
    function changeVotes(event) {
        if (incCount === 0 && event.target.value === '+') {
            patchVotes(id,type,1)
        } else if (incCount === -1 && event.target.value === '+') {
            patchVotes(id,type,2)
        } else if (incCount === 0 && event.target.value === '-') {
            patchVotes(id,type,-1)
        } else if (incCount === 1 && event.target.value === '-') {
            patchVotes(id,type,-2)
        }
        if (event.target.value === '+') {
            setIncCount(1)
        } else {
            setIncCount(-1)
        }
    }
    return (
        <div>
            <p>{count+incCount}</p>
            <button onClick={changeVotes} value='+'>+</button>
            <button onClick={changeVotes} value='-'>-</button>
        </div>
    )
}
export default VoteButton