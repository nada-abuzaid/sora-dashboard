import React from 'react';
import { GoCheck } from 'react-icons/go';
import styled from 'styled-components';

export default function Feature({ featureName }) {
  return (
    <Div>
      <div className='icon'>
        <GoCheck />
      </div>
      <p>{featureName}</p>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  gap: 0.6rem;
  .icon {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.check};
  }
  p {
    font-family: 'Nunito Sans', sans-serif;
    color: ${(props) => props.theme.colors.lightGray4};
  }
`;
