import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  return (
    <>
      <form>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea rows='8' className="form-control" id="myBox"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

TextForm.prototype = {heading: PropTypes.string.isRequired}
TextForm.defaultProps = {heading: 'Form'}
