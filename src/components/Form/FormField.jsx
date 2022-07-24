import React, { useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import TextError from './TextError';
import { FieldStyle } from '../styled/FormStyles';

export default function FormField({ placeholder, name, ...rest }) {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <FieldStyle>
      <Field
        id={name}
        name={name}
        value={value}
        {...rest}
        onChange={handleChange}
        className={`${value ? 'filled form__input' : 'form__input'}`}
      />
      <label htmlFor={name} className="form__label">
        {placeholder}
      </label>
      <ErrorMessage name={name} component={TextError} />
    </FieldStyle>
  );
}

FormField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormField.defaultProps = {
  type: 'text',
};
