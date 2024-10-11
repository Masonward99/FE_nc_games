import { useState } from "react";
import '../components/css/ImagePicker.css'

function ImagePicker({ setFile, defaultSrc, type }) {
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
      <>
        <label htmlFor="imagePicker" className="image-picker-label">Choose Image</label>
        <input
          type="file"
          id="imagePicker"
          name="imagePicker"
          accept="image /*"
          onChange={loadImg}
          className="image-picker"
        />
        <img
          id="output"
          className={type == "profile" ? "imgPickerProfileTest" : null}
          src={
            defaultSrc
              ? defaultSrc
              : "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?w=700&h=700"
          }
        />
        {invalidFile ? (
          <p className="errorText">Invalid image type selected</p>
        ) : null}
      </>
    );
}
export default ImagePicker