import { Link } from 'gatsby';
import React from 'react';
import { Form, FormField, SubmitButton } from '../../../components/Form';
import loginSchema from '../../../utils/loginSchema';
import registerSchema from '../../../utils/registerSchema';
import { navigate } from 'gatsby';
import { LoginDiv, RegisterDiv } from './styles';

export default function FormAuth() {
  const url = window.location.search.substring(1);
  let initialValues = {};
  let validationSchema = {};
console.log(Form);
  if (url === 'register' || url === '') {
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
  }

  const handleSubmit = () => {
    if (url === 'register' || url === '') {
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
        <LoginDiv>
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
        </LoginDiv>
      ) : url === 'set-password' ? (
        <RegisterDiv>
          <FormField name='email' placeholder='Email*' />
          <FormField
            type='password'
            name='new-password'
            placeholder='New pasword*'
          />
          <FormField
            type='password'
            name='confirm-password'
            placeholder='Confirm pasword*'
          />
          <SubmitButton title='Register' />
        </RegisterDiv>
      ) : (
        <LoginDiv></LoginDiv>
      )}
    </Form>
  );
}
