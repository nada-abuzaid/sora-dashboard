import React from 'react';
import styled from 'styled-components';

function TextError({ children }) {
  return <Div className='invalid'>{children}</Div>;
}

export default TextError;

const Div = styled.div`
  color: #DA1E28;
  position: absolute;
  top: 3rem;
`;
