import { useFormikContext } from 'formik';
import React from 'react';
import { SubmitStyle } from '../styled/FormStyles';

const SubmitButton = ({ title }) => {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <SubmitStyle>
      <button
        type='submit'
        onClick={handleSubmit}
        disabled={!isValid}
        className='btn'
      >
        {title}
      </button>
    </SubmitStyle>
  );
};

export default SubmitButton;
