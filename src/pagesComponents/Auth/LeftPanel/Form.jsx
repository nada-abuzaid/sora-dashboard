import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormField, SubmitButton } from '../../../components/Form';
import { loginSchema, registerSchema } from '../../../utils';
import { LoginDiv, RegisterDiv } from './styles';

export default function FormAuth() {
  const navigate = useNavigate();
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
  } else if (url === 'login' || url === '') {
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
    if (url === 'register') {
      navigate('/auth?verify-email');
    } else if (url === 'login' || url === 'set-password' || url === '') {
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
      {
      ({ errors }) => (
        <>
          {' '}
          {url === 'register' ? (
            <RegisterDiv>
              <FormField name="firstName" placeholder="First name*" errors={errors} />
              <FormField name="lastName" placeholder="Last name*" errors={errors} />
              <FormField name="email" placeholder="Email*" errors={errors} />
              <SubmitButton title="Register" />
            </RegisterDiv>
          ) : url === 'login' || url === '' ? (
            <LoginDiv>
              <div className="inputs">
                <FormField name="email" placeholder="Email*" errors={errors} />
                <FormField
                  name="password"
                  placeholder="Password*"
                  type="password"
                  errors={errors}
                />
                <Link to="/auth?forgot-password" className="forgot-password">
                  Forgot your password?
                </Link>
              </div>
              <SubmitButton title="Login" />
            </LoginDiv>
          ) : (
            <LoginDiv />
          )}
        </>
      )
     }
    </Form>
  );
}
