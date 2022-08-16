import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import { Main } from '../styled/LayoutStyles';
import MobileScreen from '../../pagesComponents/Auth/RightPanel';

export default function AuthLayout({ children }) {
  return (
    <div>
      <Header />
      <Main>
        <div className="main">{children}</div>
        <MobileScreen />
      </Main>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
