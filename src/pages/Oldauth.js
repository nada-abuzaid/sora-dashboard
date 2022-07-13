import * as React from 'react';
import styled from 'styled-components';
import { AuthForm, RightPanel } from '../pages-components';

const NotFoundPage = () => {
  return (
    <AuthWrapper>
      <AuthForm />
      <RightPanel />
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
  top: 0;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 990px) {
    flex-direction: column;
    overflow: auto;
    height: 200vh;
  }
`;

export default NotFoundPage;
