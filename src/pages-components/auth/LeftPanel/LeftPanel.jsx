import React from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Title from './Title';

export default function LeftSide() {
  return (
    <Div>
      <Title title='Welcome to Syrona Health' />
      <Tabs />
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
