import React from 'react';
import FormInput from './FormInput';
import FormLabel from './FormLabel';

const Form = ({ action, target, method, autocomplete }) => {
  return (
    <div>
      <form action={action} target={target} method={method} autocomplete={autocomplete}>
        <FormLabel labelFor="labelOne" labelName="label :" />
        <FormInput name="labelOne" type="checkbox" />
        <FormLabel labelFor="labelTwo" labelName="label 2 :" />
        <FormInput name="labelTwo" type="checkbox" />
      </form>
    </div>
  );
};

export default Form;
