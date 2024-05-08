import React from 'react';
import './Input.css'
function Input({ placeholder, type, name, value, register }) {
  return (
    <div>
   
      <input
      className='inputfield'
      placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        {...register(name)}
       
      />
    </div>
  );
}

export default Input;
