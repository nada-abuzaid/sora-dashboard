import React, { useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import styled from 'styled-components';

const FormField = ({ placeholder, name, ...rest }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <Div>
      <Field
        id={name}
        name={name}
        value={value}
        {...rest}
        onChange={handleChange}
        className={`${value ? 'filled form__input' : 'form__input'}`}

      />
      <label htmlFor={name} className='form__label'>
        {placeholder}
      </label>
      <ErrorMessage name={name} component={TextError} />
    </Div>
  );
};

export default FormField;

const Div = styled.div`
  position: relative;
  .form__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #c6c6c6;
    border-radius: 5px;
    outline: none;
    padding: 1.4rem;
  }
  .form__label {
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    color: ${({ theme: { colors } }) => colors.primaryDark};
    cursor: text;
    transition: all 200ms ease-in;
    background-color: white;
  }
  .form__input:focus ~ .form__label, .filled ~ .form__label {
    top: -0.5rem;
    font-size: 0.8rem;
    left: 0.8rem;
    padding: 0 0.4rem;
    transition: all 200ms ease-in;
  }
`;

// , .form__input:valid ~ .form__label
// .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label
