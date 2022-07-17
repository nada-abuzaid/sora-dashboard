import React from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Title from './Title';
import Button from '../Button';
import { Form, FormField, SubmitButton } from '../../../components/Form';
import { navigate } from 'gatsby';

export default function LeftSide({ title }) {
  const url = window.location.search.substring(1);
  return (
    <Div>
      {title === 'verify-email' || url === 'verify-email' ? (
        <Wrapper>
          <Title title={title} />
          <p className='desc'>
            Please check your email and click on the provided link to verify it.
          </p>
          <Button text='Continue' link='/auth?set-password' />
        </Wrapper>
      ) : title === 'Forgot password' || url === 'forgot-password' ? (
        <Wrapper>
          <Title title={title} />
          <p>Please enter your email address and recover your passoword</p>
          <div className='form'>
            <Form
              initialValues={{
                email: '',
              }}
              onSubmit={() => {
                navigate('/auth?login');
              }}
            >
              <FormField name='email' placeholder='Email*' />
              <SubmitButton title='Reset password' />
            </Form>
          </div>
        </Wrapper>
      ) : (
        <>
          <Title title={title} />
          <Tabs />
        </>
      )}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    margin-top: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 0.8rem;

  .desc {
    font-family: 'Nunito Sans';
    text-align: center;
    font-size: 1.2rem;
    width: 60%;
  }
  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4rem;
  }
`;
