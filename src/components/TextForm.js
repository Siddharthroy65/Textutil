import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper case was clicked"+ text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case!",'Success')
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Use Your Headphone",'Success')
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    props.showAlert("Your text was download",'Success')
  };

  const handleLoClick = () => {
    // console.log("upper case was clicked"+ text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("onverted to Lower case!",'Success')
  };

  const handleClearClick = () => {
    // console.log("upper case was clicked"+ text)
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared ",'Success')
  };

  const handelOnChange = (event) => {
    // console.log("on Change")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#bdbfbb ": "white",color:props.mode === "dark" ? "white" : "black" 
            }}
            id="myBox"
            value={text}
            onChange={handelOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-primary mx-2 my-2"
        >
          Speak
        </button>
        <button className="btn btn-primary mx-1" onClick={downloadTxtFile}>
          Download Text
        </button>
      </div>
      <div
        className="container my -3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
      <h1>Your text Summary</h1>
      <p>
        {text.split(" ").length}words And {text.length} Character
      </p>
      <p>{0.08 * text.split(" ").length}Minute read</p>

      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to Preview it here"}</p>
      </div>
     
    </>
  );
}
