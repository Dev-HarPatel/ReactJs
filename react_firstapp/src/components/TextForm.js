import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpperClick = ()=>{
    // console.log('UpperCase was clicked!')
    var newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowerClick = ()=>{
    // console.log('UpperCase was clicked!')
    var newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (Event)=>{
    // console.log('On Changed!')
    setText(Event.target.value)
  }
  return (
    <>
      <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea rows='8' value={text} onChange={handleOnChange} className="form-control" id="myBox"/>
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to Lowercase</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

TextForm.prototype = {heading: PropTypes.string.isRequired}
TextForm.defaultProps = {heading: 'Form'}
