import Close from "../../../components/icons/Close";

function ProgressBar({ step, setIsModalVisible }) {
    function closeModal() {
        setIsModalVisible(false);
    }

    return (
        <div className="progress-bar">
            <div className={step >= 1 ? "filled-progress" : "unfilled-progress"}>
                <p>Step 1</p>
            </div>
            <div className={step >= 2 ? "filled-progress" : "unfilled-progress"}>
                <p>Step 2</p>
            </div>
            <div className={step >= 3 ? "filled-progress" : "unfilled-progress"}>
                <p>Step 3</p>
            </div>
            <button className="modal-close-button" onClick={closeModal}>
                <Close/> 
            </button>
        </div>
    );
}

export default ProgressBar