import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value)
    };

    const handleUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to Uppercase", "success");
    };

    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Converted to Lowercase", "success");
    };

    const removeText = () => {
        let newText = "";
        setText(newText)
        props.ShowAlert("Text removed", "success");

    };

    const handleCopy = () => {
        let copyText = document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.ShowAlert("Copied to clipboard", "success");
    };

    const handleExtraSpaces = () => {
        let removeExtraSpaces = text.split(/[ ]+/);
        setText(removeExtraSpaces.join(" "));
        props.ShowAlert("Extra spacing removed", "success");
    }

    return (
        <>
            <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="my-3">{props.heading}</h2>
                <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={handleUppercase}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleLowercase}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2 my-3" onClick={removeText}>Remove text</button>
                <button className="btn btn-primary my-3" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces text</button>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
            </div>
        </>
    )
};
