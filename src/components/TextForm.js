
import React, { useState } from 'react'

export default function (props) {
    const [text, setText] = useState("");
    // text = "changing text";    // wrong way to change state
    // setText("changing text");   // correct way to change state  
    const handleUpClick = (() => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success')
    });

    const handleLoClick = (() => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert('Converted to Lowercase', 'success')
    });
    const ClearAllText = (() => {
        setText(" ");
        props.showAlert('Please Enter something','success')
    });

    const handleOnChange = ((event) => {
        setText(event.target.value);

    });

    const copyText=(()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard!','success')
    })

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ClearAllText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>CopyText</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Average reading time</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
