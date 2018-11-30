//render a single label and text input
import React from 'react';
//({input} ==props.input
export default ({input,label}) => {
  return (
    // == onBlur={input.onBlur} ....
    <div>
      <label> {label}</label>

      <input {...input}/>

    </div>
  );
};
