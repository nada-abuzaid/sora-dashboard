import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Form, FormField, SubmitButton } from '../../../components/Form';
import { loginSchema, registerSchema } from '../../../utils';
import { LoginDiv, RegisterDiv } from './styles';
import LoginButton from '../../../components/login-button';

export default function FormAuth() {
  const navigate = useNavigate();
  const url = window.location.search.substring(1);
  const { loginWithRedirect } = useAuth0();
  let initialValues = {};
  let validationSchema = {};

  // email: "nada.b.abu.zaid@gmail.com"
  // email_verified: false
  // name: "nada.b.abu.zaid@gmail.com"
  // nickname: "nada.b.abu.zaid"
  // picture: "https://s.gravatar.com/avatar/4b2f8fec63ca9c58fd4abcab8efff0…?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fna.png"
  // sub: "auth0|62f9bc74276e28eb38cf3b4c"
  // updated_at: "2022-08-15T03:29:18.081Z"

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
              <SubmitButton
                title="Register"
                className="btn btn-primary btn-block"
                onClick={() => loginWithRedirect({
                  screen_hint: 'signup',
                })}
              >
                Sign Up
              </SubmitButton>
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
              <LoginButton />
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
