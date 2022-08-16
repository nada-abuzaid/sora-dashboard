/* eslint-disable max-len */
import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Nav } from './styles';
// import { setCompanies } from '../../state/companies';

export default function Header({ isOpen, setisOpen }) {
  const { dashboard } = useSelector((state) => state.dashboard.value);
  // const companies = useSelector((state) => state.companies.value);
  // const dispatch = useDispatch();

  // const options = companies.map((ele) => ({
  //   value: ele.name,
  // }));

  // const onSearchChange = (value) => {
  //   console.log(companies);
  //   console.log(companies.filter((item) => item.name.toUpperCase().includes(value.toUpperCase())));
  //   dispatch(setCompanies((companies.filter((item) => item.name.toUpperCase().includes(value.toUpperCase())))));
  // };

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
