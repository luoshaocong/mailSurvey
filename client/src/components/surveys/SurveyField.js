//render a single label and text input
import React from 'react';
//({input} ==props.input  redux form event
export default ({input,label, meta: {error,touched}}) => {

  return (
    // == onBlur={input.onBlur} ....
    <div>
      <label> {label} </label>

      <input {...input} style={{marginBottom:'5px'}}/>
      <div className="red-text" style ={{marginBottom:'20px'}}>
      {touched && error}
      </div>
    </div>
  );
};
