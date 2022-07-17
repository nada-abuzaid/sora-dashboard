import { useFormikContext } from 'formik';
import React from 'react';
import styled from 'styled-components';

const SubmitButton = ({ title }) => {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <Div>
      <button
        type='submit'
        onClick={handleSubmit}
        disabled={!isValid}
        className='btn'
      >
        {title}
      </button>
    </Div>
  );
};

export default SubmitButton;

const Div = styled.div`
  .btn {
    width: 100%;
    padding: 0.7rem;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
  }
`;
