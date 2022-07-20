import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Upgrade from './Subsecribe/Upgrade';
import logout from '../../assets/svgs/Logout.svg';
import logo from '../../assets/svgs/syrona.svg';
import AppLogo from '../../assets/svgs/AppLogo.svg';
import { Background, ASide } from './styles';
import '../../css/typography.css';

export default function Sidebar({ isOpen, setisOpen }) {
  return (
    <>
      <Background isOpen={isOpen}></Background>
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
