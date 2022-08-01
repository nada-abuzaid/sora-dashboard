import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { FieldStyle } from '../styled/FormStyles';
import TextError from './TextError';

export default function FormField({
  placeholder, name, className, ...rest
}) {
  return (
    <FieldStyle>
      <Field id={name} name={name} {...rest} className="form__input" required />
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
  className: PropTypes.string.isRequired,
};

FormField.defaultProps = {
  type: 'text',
};
