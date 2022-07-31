import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { FieldStyle } from '../styled/FormStyles';
import TextError from './TextError';

export default function FormField({
  placeholder, name, className, ...rest
}) {
  // const [value, setValue] = useState('');
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const [error, setError] = useState('');
  return (
    <FieldStyle>
      <Field
        id={name}
        name={name}
        {...rest}
        // onChange={handleChange}
        // className={`${value ? 'filled form__input' : 'form__input'}`}
        className={className}
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
  className: PropTypes.string.isRequired,
};

FormField.defaultProps = {
  type: 'text',
};
