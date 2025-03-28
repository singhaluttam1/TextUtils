import React , {useState}from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "Success")
    }
    const handleLoClick=()=>{
        let newText=text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "Success")
        
    }
    const handleClearClick=()=>{
        setText("")
        props.showAlert("Text Cleared", "Success", "Success")

    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","Success")
        
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","Success")

    }
    const[text,setText]=useState(" ");
    return (<>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743 '}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' ,color:props.mode === 'dark' ? 'white' : '#042743'}} rows="8">{text}</textarea>
            </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>Your text Summary</h2>
                <p>{text.split (" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
            </>
    )
}
