import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Upgrade from './Subsecribe/Upgrade';
import logout from '../../assets/svgs/Logout.svg';
import logo from '../../assets/svgs/syrona.svg';
import AppLogo from '../../assets/svgs/AppLogo.svg';
import '../../css/typography.css';

export default function Sidebar({ isOpen, setisOpen }) {
  return (
    <>
      <Div isOpen={isOpen}></Div>
      <ASide isOpen={isOpen}>
        <div className='side-logo'>
          <div className='logo'>
            <img src={AppLogo} alt='App Logo' />
            <p className='sora'>Sora</p>
          </div>
          <div className='close-btn' onClick={() => setisOpen(!isOpen)}>
            <StaticImage
              alt='close'
              src='../../assets/svgs/close.svg'
              width={14}
            />
          </div>
        </div>
        <div className='side-content'>
          <div className='side-menu'>
            <Link to='/' className='side-menu-item' activeClassName='active'>
              <StaticImage
                src='../../assets/svgs/Menu.svg'
                alt='Dashboard'
                className='icon'
              />
              <p>Dashboard</p>
            </Link>
            <Link
              to='/account'
              className='side-menu-item'
              activeClassName='active'
            >
              <StaticImage
                src='../../assets/svgs/Account.svg'
                alt='Account'
                className='icon'
              />
              <p>Account</p>
            </Link>
          </div>
          <div>
            <Upgrade isOpen={isOpen} />
          </div>
          <Link to='/auth' className='side-menu-item' activeClassName='active'>
            <img src={logout} alt='Logout' className='icon' />
            <p>Sign Out</p>
          </Link>
        </div>
        <div className='footer'>
          <p>© 2022 Syrona Health. All rights reserved.</p>
          <span>
            <img src={logo} alt='App Logo' />
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
  isOpen: PropTypes.bool,
  /**
   * Set the sidebar state
   */
  setisOpen: PropTypes.bool,
};

Sidebar.defaultProps = {
  isOpen: true,
  setisOpen: true,
};

const ASide = styled.div`
  box-shadow: 0px 2px 4px 2px #b5b5b5;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  border-right: 1px solid rgba(82, 82, 82, 0.4);
  overflow: hidden;
  transition: all 0.5s ease;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) =>
    props.isOpen
      ? `
    width:280px;
    `
      : `
    width:80px;
    `}
  .side-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .side-logo {
    display: flex;
    padding: 1.2rem;
    align-items: center;
    justify-content: space-between;
    .close-btn {
      opacity: 0;
      @media only screen and (max-width: 600px) {
        opacity: 1;
      }
    }
    .logo {
      display: flex;
      align-items: center;
      .sora {
        text-transform: uppercase;
        font-family: 'Nunito Sans';
        font-weight: bold;
        color: ${({ theme: { colors } }) => colors.primary};
        font-size: 1.3rem;
        margin-left: 0.5rem;
        ${(props) => (props.isOpen ? null : `display:none`)}
      }
    }
  }
  .side-menu {
    display: flex;
    flex-direction: column;
  }
  .side-menu-item {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: ${({ theme: { colors } }) => colors.primaryDark};

    p {
      font-family: 'Nunito Sans';
      font-size: 1rem;
      margin-left: 0.7rem;
      padding: 1.3rem 0;
      ${(props) => (props.isOpen ? null : `display:none`)}
    }
    .icon {
      margin-left: 1.3rem;
      width: 1.5rem;
      ${(props) => (props.isOpen ? null : `margin: 1.4rem`)}
    }
  }
  .active {
    font-weight: bold;
    background-color: ${({ theme: { colors } }) => colors.lightGray3};
  }
  .footer {
    background-color: ${({ theme: { colors } }) => colors.lightGray3};
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 0.7rem;
      font-family: 'Nunito Sans';
      margin-left: 0.6rem;
      ${(props) => (props.isOpen ? null : `display: none`)}
    }
    span {
      height: 100%;
      padding: 0 0.5rem;
      border-radius: 0.5rem 0 0 0;
      background-color: ${({ theme: { colors } }) => colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      ${(props) =>
        props.isOpen
          ? `border-radius: 0.5rem 0 0 0`
          : `border-radius: 0; width: 100%;`}
    }
  }

  @media only screen and (max-width: 600px) {
    z-index: 100;
    width: 80%;
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.white};
    ${(props) => (props.isOpen ? null : `display: none`)}
  }
`;

const Div = styled.div`
  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 0;
    z-index: 90;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    ${(props) => (props.isOpen ? null : `display: none`)}
  }
`;
