import React from 'react';
import styled from 'styled-components';
import { Form, FormField, SubmitButton } from '../../../components/Form';

export default function FormAuth() {
  const url = window.location.search.substring(1);
  let initialValues = {};

  if (url === 'register') {
    initialValues = {
      firstName: '',
      lastName: '',
      email: '',
    };
  } else {
    initialValues = {
      email: '',
      password: '',
    };
  }
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit}>
      {url === 'register' ? (
        <Div>
          <FormField name='firstName' placeholder='First name*' />
          <FormField name='lastName' placeholder='Last name*' />
          <FormField name='email' placeholder='Email*' />
          <SubmitButton title='Register' />
        </Div>
      ) : (
        <Div>
          <FormField name='email' placeholder='Email*' />
          <FormField name='password' placeholder='Password*' type='password' />
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
`