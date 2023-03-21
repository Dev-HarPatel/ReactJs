import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState('Enter text hear');
  const handleUpperClick = ()=>{
    // console.log('UpperCase was clicked!')
    var newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (Event)=>{
    // console.log('On Changed!')
    setText(Event.target.value)
  }
  return (
    <>
      <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea rows='8' value={text} onChange={handleOnChange} className="form-control" id="myBox"/>
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick}>Submit</button>
        </div>
    </>
  )
}

TextForm.prototype = {heading: PropTypes.string.isRequired}
TextForm.defaultProps = {heading: 'Form'}
