import { useState } from "react"
import { patchVotes } from "../utils/utils"

function VoteButton({ direction, id, count, type }) {
    const [incCount, setIncCount] = useState(0)
    function changeVotes(event) {
        if (incCount === 0 && event.target.value === '+') {
            patchVotes(id,  1)
            setIncCount(1)
        } else if (incCount === -1 && event.target.value === '+') {
            patchVotes(id,  2)
            setIncCount(1)
        } else if (incCount === 0 && event.target.value === '-') {
            patchVotes(id,  -1)
            setIncCount(-1)
        } else if (incCount === 1 && event.target.value === '-') {
            patchVotes(id,  -2)
            setIncCount(-1)
        }
        else if (incCount === 1 && event.target.value === '+') {
            patchVotes(id,  -1)
            setIncCount(0)
        } else if (incCount === -1 && event.target.value === '-') {
            patchVotes(id, 1)
            setIncCount(0)
        }
    }
    return (
        <div className={direction == 'vertical' ? 'verticalVoteButtonContainer' : 'horizontalVoteButtonContainer'}>
            <button onClick={changeVotes} value='+' className={incCount > 0 ? 'selectedButton' : ''}>+</button>
            <p>{count+incCount}</p>
            <button onClick={changeVotes} value='-' className={incCount <0 ? 'selectedButton' : ''}>-</button>
        </div>
    )
}
export default VoteButton