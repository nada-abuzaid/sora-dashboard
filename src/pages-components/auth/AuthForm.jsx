import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form } from 'antd';
import {
  PanelTitle,
  Scribbles,
} from '../../components/styled/CommonStyled.styled';
import authForms, { AUTH_FORM_KEYS } from '../../constants/authForms';
import { navigate } from 'gatsby-link';
import { useAuth0 } from '@auth0/auth0-react';
import { FloatLabel } from '../../components';

const isBrowser = () => typeof window !== 'undefined';

const AuthForm = () => {
  const { loginWithRedirect } = useAuth0();
  const [currentForm, setForm] = useState(null);
  const [type, setType] = useState(null);

  const afterSubmit = () => {
    // switch (type) {
    //   case AUTH_FORM_KEYS.REGISTER:
    //     navigate('/auth?type=verify-email')
    //     return
    //   case AUTH_FORM_KEYS.VERIFY_EMAIL:
    //     navigate('/auth?type=set-password')
    //     return
    //   case AUTH_FORM_KEYS.SET_PASSWORD:
    //     navigate('/auth?type=login')
    //     return
    //   case AUTH_FORM_KEYS.LOGIN:
    //     loginWithRedirect()
    //     // navigate('/')
    //     return
    //   case AUTH_FORM_KEYS.FORGOT_PASSWORD:
    //     navigate('/auth?type=set-password')
    //     return
    //   default:
    //     loginWithRedirect()
    // }
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

  const toggleForgotPassword = () => {
    navigate('/auth?type=forgot-password');
  };

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
          {/* {currentForm.selectedTab && <FormType
          onClick={onClick}
          isLogin={currentForm.selectedTab === AUTH_FORM_KEYS.LOGIN}
        />} */}
          <Form
            style={{
              width: '70%',
            }}
            name="auth"
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
            {/* {currentForm.selectedTab === AUTH_FORM_KEYS.LOGIN && <ForgotPassword onClick={toggleForgotPassword}>
            Forgot password?
          </ForgotPassword>} */}
            {/* <Form.Item>
            <Confirm type="primary" htmlType="submit" >
              {currentForm.buttonText}
            </Confirm>
            <Confirm type="primary" htmlType="submit" >
              Register
            </Confirm>
          </Form.Item> */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Confirm type="primary" onClick={loginWithRedirect}>
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

const FormType = ({ onClick, isLogin }) => {
  return (
    <FormTypeWrapper>
      <TypeNamesWrapper>
        <TypeName selected={isLogin} onClick={() => onClick(true)}>
          Login
        </TypeName>
        <TypeName selected={!isLogin} onClick={() => onClick(false)}>
          Register
        </TypeName>
      </TypeNamesWrapper>
      <GreyBar>
        <SelectedBar isLeft={isLogin} />
      </GreyBar>
    </FormTypeWrapper>
  );
};

const ForgotPassword = styled.div`
  font-family: NunitoSans-Bold;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  color: ${({ theme: { colors } }) => colors.primary};
  text-align: right;
  line-height: 22px;
`;

const TypeName = styled.div`
  font-family: NunitoSans-Bold;
  font-size: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  ${(props) =>
    props.selected
      ? `
  color: ${({ theme: { colors } }) => colors.primary};
    `
      : `
    color: ${({ theme: { colors } }) => colors.midGray};
    `}
  transition: all .1s linear;
`;

const Description = styled.div`
  font-family: NunitoSans;
  font-size: 28px;
  padding: 40px 20%;
  margin-bottom: 30px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.primaryDark};
`;

const TypeNamesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const FormTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
`;

const SelectedBar = styled.div`
  width: 50%;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.primary};
  border-radius: 1.5px;
  position: absolute;
  ${(props) =>
    props.isLeft
      ? `
    left: 0;
    `
      : `
    left: 50%;
    `}
  transition: all .1s linear;
`;

const GreyBar = styled.div`
  height: 3px;
  width: 100%;
  position: relative;
  border-radius: 1.5px;
  background: ${({ theme: { colors } }) => colors.midGray};
  margin-bottom: 50px;
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
  font-family: NunitoSans-SemiBold;
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
  font-family: NunitoSans-Bold;
  border: 3px solid ${({ theme: { colors } }) => colors.primary};
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.primary};
  min-width: 146px;
  @media only screen and (max-width: 990px) {
    min-width: 110px;
    font-size: 16px;
  }
`;
