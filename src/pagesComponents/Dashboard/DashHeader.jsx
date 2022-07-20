import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { Nav } from './styles';
export default function Header({ isOpen, setisOpen }) {
  return (
    <Nav isOpen={isOpen}>
      <RiMenu2Line
        className='menu-icon'
        onClick={() => {
          setisOpen(!isOpen);
        }}
      />
    </Nav>
  );
}

Header.propTypes = {
  /**
   * If the sidebar is open or not
   */
  isOpen: PropTypes.bool,
  /**
   * Set the sidebar state
   */
  setisOpen: PropTypes.bool,
};

Header.defaultProps = {
  isOpen: true,
  setisOpen: true,
};
