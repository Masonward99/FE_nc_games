import { useState } from "react";
import { patchVotes } from "../../utils/utils";
import DownArrow from "../icons/DownArrow";
import UpArrow from "../icons/UpArrow";
import "./voteButton.css";

function VoteButton({ id, count, type }) {
    const [incCount, setIncCount] = useState(0);
    function changeVotes(event) {
        event.preventDefault();
        if (incCount === 0 && event.target.value === "+") {
            patchVotes(id, 1, type);
            setIncCount(1);
        } else if (incCount === -1 && event.target.value === "+") {
            patchVotes(id, 2, type);
            setIncCount(1);
        } else if (incCount === 0 && event.target.value === "-") {
            patchVotes(id, -1, type);
            setIncCount(-1);
        } else if (incCount === 1 && event.target.value === "-") {
            patchVotes(id, -2, type);
            setIncCount(-1);
        } else if (incCount === 1 && event.target.value === "+") {
            patchVotes(id, -1, type);
            setIncCount(0);
        } else if (incCount === -1 && event.target.value === "-") {
            patchVotes(id, 1, type);
            setIncCount(0);
        }
    }
    return (
        <div
            className={
                incCount > 0
                ? "vote-buttons up-selected"
                : incCount < 0
                ? "vote-buttons down-selected"
                : "vote-buttons"
            }
        >
            <button onClick={changeVotes} value="+" className="vote-button">
                <UpArrow />
            </button>
            <p className="vote-count">{count + incCount}</p>
            <button onClick={changeVotes} value="-" className="vote-button">
                <DownArrow />
            </button>
        </div>
    );
}
export default VoteButton;
