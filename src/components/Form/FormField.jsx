import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import styled from 'styled-components';

const FormField = ({ placeholder, name, ...rest }) => {
  return (
    <Div>
      <Field
        id={name}
        name={name}
        {...rest}
        placeholder={placeholder}
        className='form-control'
      />
      <ErrorMessage
        name={name}
        component={TextError}
        className='error-massage'
      />
    </Div>
  );
};

export default FormField;

const Div = styled.div`
  .form-control {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid #c6c6c6;
  }
`;
