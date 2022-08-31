import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from './styles';
import { setSidebarOpen } from '../../store';

export default function Header() {
  const { dashboard } = useSelector((state) => state.dashboard.value);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.sidebar.value);

  return (
    <Nav isOpen={isOpen} dashboard={dashboard}>
      <RiMenu2Line
        className="menu-icon"
        onClick={() => {
          dispatch(setSidebarOpen({ isOpen: !isOpen }));
        }}
      />
    </Nav>
  );
}
