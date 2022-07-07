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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
