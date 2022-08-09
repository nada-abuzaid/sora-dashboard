/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { FieldStyle } from '../styled/FormStyles';
import TextError from './TextError';

export default function FormField({
  placeholder, name, errors, ...rest
}) {
  const [error, setError] = useState(false);
  useEffect(() => {
    if (errors[name]) {
      setError(true);
    }
  }, [errors[name]]);
  return (
    <FieldStyle error={!error}>
      <Field id={name} name={name} {...rest} className={error ? 'form__input error' : 'form__input'} required />
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
