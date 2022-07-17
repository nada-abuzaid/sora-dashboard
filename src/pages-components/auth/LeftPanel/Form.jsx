import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Form, FormField, SubmitButton } from '../../../components/Form';
import loginSchema from '../../../utils/loginSchema';
import registerSchema from '../../../utils/registerSchema';
import { navigate } from 'gatsby';

export default function FormAuth() {
  const url = window.location.search.substring(1);
  let initialValues = {};
  let validationSchema = {};

  if (url === 'register') {
    initialValues = {
      firstName: '',
      lastName: '',
      email: '',
    };
    validationSchema = registerSchema;
  } else if (url === 'login') {
    initialValues = {
      email: '',
      password: '',
    };
    validationSchema = loginSchema;
  } else if (url === 'set-password') {
    initialValues = {
      email: '',
    };
    validationSchema = loginSchema;
  } else if (url === 'forgot-password') {
  }

  const handleSubmit = () => {
    if (url === 'register') {
      navigate('/auth?verify-email');
    } else if (url === 'login') {
      navigate('/');
    } else if (url === 'set-password') {
      navigate('/');
    } else if (url === 'forgot-password') {
      navigate('/auth?login');
    }
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {url === 'register' || url === '' ? (
        <RegisterDiv>
          <FormField name='firstName' placeholder='First name*' />
          <FormField name='lastName' placeholder='Last name*' />
          <FormField name='email' placeholder='Email*' />
          <SubmitButton title='Register' />
        </RegisterDiv>
      ) : url === 'login' ? (
        <Div>
          <div className='inputs'>
            <FormField name='email' placeholder='Email*' />
            <FormField
              name='password'
              placeholder='Password*'
              type='password'
            />
            <Link to='/auth?forgot-password' className='forgot-password'>
              Forgot your password?
            </Link>
          </div>
          <SubmitButton title='Login' />
        </Div>
      ) : url === 'set-password' ? (
        <RegisterDiv>
          <FormField name='email' placeholder='Email*' />
          <FormField name='new-password' placeholder='New pasword*' />
          <FormField name='confirm-password' placeholder='Confirm pasword*' />
          <SubmitButton title='Register' />
        </RegisterDiv>
      ) : (
        <Div></Div>
      )}
    </Form>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  .forgot-password {
    color: ${({ theme: { colors } }) => colors.primary};
    align-self: flex-end;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
