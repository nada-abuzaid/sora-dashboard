import React from 'react';
import styled from 'styled-components';
import { AuthLayout } from '../components';
import { Title } from '../pages-components';
import Button from '../pages-components/auth/Button';

export default function verifyEmail() {
  return (
    <AuthLayout>
      <Wrapper>
        <Title title='Verify Email' />
        <p className='desc'>
          Please check your email and click on the provided link to verify it.
        </p>
        <Button text='Continue' />
      </Wrapper>
    </AuthLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  .desc {
    font-family: 'Nunito Sans';
    text-align: center;
    font-size: 20px;
    width: 50%;
    margin-bottom: 1rem;
  }
`;
