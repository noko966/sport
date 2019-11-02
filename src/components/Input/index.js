import React from "react";

export default function Input({type, className, placeholder, onChange}) {
  return (
    <div className={'btcl_input_wrapper ' + (className ? className : '') }>
      <input onChange={onChange} placeholder={placeholder} className='btcl_input' type={type}/>
    </div>
  );
}
