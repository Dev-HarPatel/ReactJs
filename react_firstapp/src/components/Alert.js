import React from 'react'

function Alert(props) {
  // console.log("props.alert:",props.alert)
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  if(props.alert !== null){
    return (
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{capitalize(props.alert.type)}: </strong> {props.alert.msg}
          </div>
    )
  }else{
    return
  }
}

export default Alert