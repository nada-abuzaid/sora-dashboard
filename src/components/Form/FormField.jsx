import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import TextError from './TextError';
import { FieldStyle, FieldWrapper } from '../../styles/FormStyle';
import useForm from '../../hooks/useForm';

export default function FormField({
  placeholder, name, errors, ...rest
}) {
  const error = useForm({ name, errors });

  return (
    <FieldWrapper>
      <FieldStyle error={!error}>
        <Field
          id={name}
          name={name}
          {...rest}
          className={error ? 'form__input error' : 'form__input'}
          required
        />
        <label htmlFor={name} className="form__label">
          {placeholder}
        </label>
      </FieldStyle>
      <ErrorMessage name={name} component={TextError} />
    </FieldWrapper>
  );
}

FormField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  errors: PropTypes.string.isRequired,
};

FormField.defaultProps = {
  type: 'text',
};
