import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logout from '../../assets/svgs/Logout.svg';
import logo from '../../assets/svgs/syrona.svg';
import AppLogo from '../../assets/svgs/AppLogo.svg';
import { Background, ASide } from './styles';
import '../../styles/typography.css';
import Upgrade from './Subsecribe/Upgrade';

import close from '../../assets/svgs/close.svg';
import menu from '../../assets/svgs/Menu.svg';
import account from '../../assets/svgs/Account.svg';
import contact from '../../assets/svgs/contact-form.svg';

export default function Sidebar({ isOpen, setisOpen }) {
  return (
    <>
      <Background isOpen={isOpen} />
      <ASide isOpen={isOpen}>
        <div className="side-logo">
          <div className="logo">
            <img src={AppLogo} alt="App Logo" />
            <p className="sora">Sora</p>
          </div>
          <button
            type="button"
            className="close-btn"
            onClick={() => setisOpen(!isOpen)}
          >
            <img alt="close" src={close} width={14} />
          </button>
        </div>
        <div className="side-content">
          <div className="side-menu">
            <NavLink to="/" className="side-menu-item">
              <img src={menu} alt="Dashboard" className="icon" />
              <p>Dashboard</p>
            </NavLink>
            <NavLink to="/account" className="side-menu-item">
              <img src={account} alt="Account" className="icon" />
              <p>Account</p>
            </NavLink>
            <NavLink to="/contact" className="side-menu-item">
              <img src={contact} alt="Logout" className="icon" />
              <p>Contact Us</p>
            </NavLink>
          </div>
          <div className="upgrade">
            <Upgrade isOpen={isOpen} />
          </div>
          <NavLink to="/auth" className="side-menu-item">
            <img src={logout} alt="Logout" className="icon" />
            <p>Sign Out</p>
          </NavLink>
        </div>
        <div className="footer">
          <p>© 2022 Syrona Health. All rights reserved.</p>
          <span>
            <img src={logo} alt="App Logo" />
          </span>
        </div>
      </ASide>
    </>
  );
}

Sidebar.propTypes = {
  /**
   * If the sidebar is open or not
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * Set the sidebar state
   */
  setisOpen: PropTypes.func.isRequired,
};
