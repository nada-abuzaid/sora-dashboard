import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logoutImg from '../../assets/svgs/Logout.svg';
import logo from '../../assets/svgs/syrona.svg';
import AppLogo from '../../assets/svgs/AppLogo.svg';
import Upgrade from '../Subsecribe/Upgrade';
import close from '../../assets/svgs/close.svg';
import menu from '../../assets/svgs/Menu.svg';
import account from '../../assets/svgs/Account.svg';
import contact from '../../assets/svgs/contact-form.svg';
import LogoutButton from '../Auth/logoutButton';
import { Background, ASide } from './styles';
import '../../styles/typography.css';
import { setSidebarOpen } from '../../store';

export default function Sidebar() {
  const { dashboard } = useSelector((state) => state.dashboard.value);
  const { isOpen } = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();
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
            onClick={() => dispatch(setSidebarOpen({ isOpen: false }))}
          >
            <img alt="close" src={close} width={14} />
          </button>
        </div>
        <div className="side-content">
          <div className="side-menu">
            <NavLink
              to={dashboard !== 'admin' ? '/' : '/admin'}
              className="side-menu-item"
            >
              <img src={menu} alt="Dashboard" className="icon" />
              <p>Dashboard</p>
            </NavLink>
            <NavLink to="/account" className="side-menu-item">
              <img src={account} alt="Account" className="icon" />
              <p>Account settings</p>
            </NavLink>
            {dashboard !== 'admin' && (
              <NavLink to="/contact" className="side-menu-item">
                <img src={contact} alt="Logout" className="icon" />
                <p>Contact Us</p>
              </NavLink>
            )}
          </div>
          {dashboard !== 'admin' && (
            <div className="upgrade">
              <Upgrade isOpen={isOpen} />
            </div>
          )}
          <NavLink to="/auth" className="side-menu-item">
            <img src={logoutImg} alt="Logout" className="icon" />
            <LogoutButton />
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
