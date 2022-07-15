import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Form, FormField, SubmitButton } from '../../../components/Form';
import loginSchema from '../../../utils/loginSchema';
import registerSchema from '../../../utils/registerSchema';

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
  } else {
    initialValues = {
      email: '',
      password: '',
    };
    validationSchema = loginSchema;
  }

  const handleSubmit = (values) => {
    console.log(values);
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
      ) : (
        <Div>
          <div className='inputs'>
            <FormField name='email' placeholder='Email*' />
            <FormField
              name='password'
              placeholder='Password*'
              type='password'
            />
            <Link to='/auth/forgot-password' className='forgot-password'>
              Forgot your password?
            </Link>
          </div>
          <SubmitButton title='Login' />
        </Div>
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
