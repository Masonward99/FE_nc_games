function ImagePicker({ setFile }) {
    
    function loadImg(event) {
        setFile(event.target.files[0])
        let output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0])
        output.onLoad = function() {
          URL.revokeObjectURL(output.src)
        }
    }
    return (
      <>
        <label htmlFor="imagePicker">Choose an image:</label>
        <input
          type="file"
          id="imagePicker"
          name="imagePicker"
          accept="image /*"
          onChange={loadImg}
        />
        <img
          id="output"
          src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?w=700&h=700"
        />
      </>
    );
}
export default ImagePicker