import { useState } from 'react';
import useFormInput from '../Hooks/useFormInput';

export default function Form() {
  const firstNameProps = useFormInput('Mary')
  const lastNameProps = useFormInput('Poppins')
  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <br />
      <br />
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>
  );
}
