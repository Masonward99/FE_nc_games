import { useState } from "react";
import './ImagePicker.css'

function ImagePicker({ setFile, defaultSrc}) {
  const [invalidFile, setInvalidFile] = useState(false);
  function loadImg(event) {
        if (event.target.files[0].type != 'image/png' && event.target.files[0].type != 'image/jpeg') {
            setInvalidFile(true)
        } else {
            setInvalidFile(false)
            setFile(event.target.files[0])
            let output = document.getElementById('output');
            output.src = URL.createObjectURL(event.target.files[0])
            output.onLoad = function () {
                URL.revokeObjectURL(output.src)
            }
        }
  }
  
    return (
        <div className="image-picker">
            <label htmlFor="imagePicker" className="image-picker-label" tabIndex={0}>Choose Image</label>
            <input
                type="file"
                id="imagePicker"
                name="imagePicker"
                accept="image /*"
                onChange={loadImg}
                className="image-picker-input"
            />
            <img
                id="output"
                className='image-picker-selected-image'
                src={defaultSrc}
            />
            {invalidFile ? (
                <p className="errorText">Invalid image type selected</p>
            ) : null}
        </div>
    );
}
export default ImagePicker