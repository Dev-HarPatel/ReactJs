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

  let str = text;
  function camelCase(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
      {
          // return index === 1 ? word.toLowerCase() : word.toUpperCase();
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      }).replace(/\s +/g, '');
  }
  const handleCamelClick = ()=>{
    var newText = camelCase(str);
    setText(newText);
  }

  const handleCopyClick = ()=>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value)
    // setText(newText);
  }

  const handleRemoveSpace = ()=>{
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleClearClick = ()=>{
    // if (confirm(text) == true) {
    //   let newText = '';
    //   setText(newText);
    // }else{
    //   let newText = text;
    //   setText(newText);
    // }
    
    let newText = '';
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
        <button className="btn btn-primary mx-3" onClick={handleCamelClick}>Convert to Camelcase</button>
        <button className="btn btn-secondary mx-3" onClick={handleRemoveSpace}>Remove Extra Spaces</button>

        <div className="flex my-5">
          <button className="btn btn-success" onClick={handleCopyClick}>Copy Text</button>
          <button className="btn btn-danger mx-3" onClick={handleClearClick}>Clear Text</button>
        </div>

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
