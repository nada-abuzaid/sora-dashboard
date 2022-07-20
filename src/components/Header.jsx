import React from 'react';
import logo from '../assets/svgs/Logo.svg';
import HeaderStyle from './styled/Header';

export default function Header() {
  return (
    <HeaderStyle>
      <img className='logo-img' src={logo} alt='Logo Img' />
    </HeaderStyle>
  );
}
