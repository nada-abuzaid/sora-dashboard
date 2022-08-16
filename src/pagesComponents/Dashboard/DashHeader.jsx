import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Nav } from './styles';

export default function Header({ isOpen, setisOpen }) {
  const { dashboard } = useSelector((state) => state.dashboard.value);

  return (
    <Nav isOpen={isOpen} dashboard={dashboard}>
      <RiMenu2Line
        className="menu-icon"
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
  isOpen: PropTypes.bool.isRequired,
  /**
   * Set the sidebar state
   */
  setisOpen: PropTypes.func.isRequired,
};
