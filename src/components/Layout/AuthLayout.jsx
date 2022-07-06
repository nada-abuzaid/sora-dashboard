<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import { RightSide } from "../../pages-components";
import Header from "../Header";
=======
import React from 'react';
import Header from '../Header';
import styled from 'styled-components';
import RightPanel from '../../pages-components/auth/RightPanel';
>>>>>>> development

export default function AuthLayout({ children }) {
  return (
    <div>
      <Header />
      <Div>
        {children}
        <RightPanel />
      </Div>
    </div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100%-3.6rem);
`;
