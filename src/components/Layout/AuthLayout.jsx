import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import { Main } from '../styled/LayoutStyles';
import { RightPanel } from '../../pagesComponents/Auth';

export default function AuthLayout({ children }) {
  return (
    <div>
      <Header />
      <Main>
        <div className="main">{children}</div>
        <RightPanel />
      </Main>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
