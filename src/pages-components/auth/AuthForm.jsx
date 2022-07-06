import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form } from 'antd';
import { PanelTitle, Scribbles, FloatLabel } from '../../components';
import authForms, { AUTH_FORM_KEYS } from '../../constants/authForms';
import { useAuth0 } from '@auth0/auth0-react';

const isBrowser = () => typeof window !== 'undefined';

const AuthForm = () => {
  const { loginWithRedirect } = useAuth0();
  const [currentForm, setForm] = useState(null);
  const [type, setType] = useState(null);

  const afterSubmit = () => {
    console.log('afterSubmit');
  };

  const getParams = () => {
    if (isBrowser()) {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      if (params.type !== type) {
        setType(params.type);
      }
    }
  };

  const onFinish = () => {
    afterSubmit();
  };

  useEffect(() => {
    if (type) {
      setForm(authForms[type]);
    } else {
      setForm(authForms[AUTH_FORM_KEYS.LOGIN]);
    }
  }, [type]);

  useEffect(() => {
    getParams();
  });

  return (
    <AuthFormWrapper>
      {currentForm ? (
        <>
          <PanelTitle style={{ position: 'relative', marginBottom: 40 }}>
            <Scribbles />
            {currentForm.title}
          </PanelTitle>
          {currentForm.description && (
            <Description>{currentForm.description}</Description>
          )}
          <Form
            style={{
              width: '70%',
            }}
            name='auth'
            onFinish={onFinish}
          >
            {currentForm.inputs.map((input, index) => {
              return (
                <FloatLabel
                  key={index + input.label}
                  label={input.label}
                  name={input.name}
                  type={input.type}
                  required={input.required}
                />
              );
            })}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Confirm type='primary' onClick={loginWithRedirect}>
                {currentForm.buttonText}
              </Confirm>
              <div style={{ width: 50 }} />
              <SignUp
                onClick={() =>
                  loginWithRedirect({
                    screen_hint: 'signup',
                  })
                }
              >
                Sign up
              </SignUp>
            </div>
          </Form>
        </>
      ) : (
        <span>Loading</span>
      )}
    </AuthFormWrapper>
  );
};

export default AuthForm;

const AuthFormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 990px) {
    flex: 0.4;
    margin-top: 30px;
  }
`;

const Description = styled.div`
  font-family: NunitoSans;
  font-size: 28px;
  padding: 40px 20%;
  margin-bottom: 30px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.primaryDark};
`;

const Confirm = styled.button`
  background-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: 6px;
  padding: 15px 25px;
  font-size: 19px;
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
  cursor: pointer;
  margin-top: 50px;
  font-family: 'NunitoSans-SemiBold';
  border: 3px solid ${({ theme: { colors } }) => colors.primary};
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.white};
  min-width: 146px;
  @media only screen and (max-width: 990px) {
    min-width: 110px;
    font-size: 16px;
  }
`;

const SignUp = styled.button`
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 6px;
  padding: 15px 25px;
  font-size: 19px;
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
  cursor: pointer;
  margin-top: 50px;
  font-family: 'NunitoSans-Bold';
  border: 3px solid ${({ theme: { colors } }) => colors.primary};
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.primary};
  min-width: 146px;
  @media only screen and (max-width: 990px) {
    min-width: 110px;
    font-size: 16px;
  }
`;
