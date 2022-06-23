import React from 'react';
import styled from 'styled-components';

export default function LeftSide() {
  return (
    <Div>
      <h2>Welcome to Syrona Health</h2>
    </Div>
  );
}

const Div = styled.div`
  width: 50%;
  height: calc(100%-3.4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
