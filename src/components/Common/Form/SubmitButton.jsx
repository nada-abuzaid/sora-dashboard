import { useFormikContext } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';
import { SubmitStyle } from '../../../styles/FormStyle';

export default function SubmitButton({ title, ...args }) {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <SubmitStyle>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!isValid}
        className="btn"
        {...args}
      >
        {title}
      </button>
    </SubmitStyle>
  );
}

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
};
