import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log("UpperCase was Clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showalert("Converted to UpperCase",'success')
    }
    const handleUpClick1 = () => {
        console.log("lowerCase was Clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showalert("Converted to lowerCase",'success')

    }
    const handleUpClick2 = () => {
        let srch = prompt("Please enter the replace word", "");
        let a;
        if (srch === null || srch === "") {
            props.showalert("Word is not Replaced",'warning')
        } else {
            a = srch
            let replace = prompt("Please enter the new word", "");
            let newText = text.replace(a, replace)
            setText(newText)
            props.showalert("Word is Replaced",'success')
        }
    }

    const handleOnChange = (event) => {
        // console.log("UpperCase was Clicked")
        setText(event.target.value)
    }

    return (
        <>
            <div className='container'>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleUpClick1}>LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={handleUpClick2}>Replace</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} charaters</p>
                <p>{(text.split(" ").length) * 0.008} minutes it take to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter the something here'}</p>
            </div>
        </>
    )


}
Textform.propTypes = {
    heading: PropTypes.string.isRequired,
}
Textform.defaultProps = {
    heading: "Example Textarea",
}