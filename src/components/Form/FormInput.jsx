import React from 'react';

const FormInput = ({ type, value, name, placeHolder }) => {
  return (
    <div>
      <input value={value} type={type} name={name} placeholder={placeHolder} />
    </div>
  );
};

export default FormInput;
