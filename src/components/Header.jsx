import React from 'react';
import styled from 'styled-components';
import logo from '../assets/svgs/Logo.svg';

export default function Header() {
  return (
    <Div>
      <img className='logo-img' src={logo} alt='Logo Img' />
    </Div>
  );
}

const Div = styled.div`
  height: 3.4rem;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 4px #b5b5b5;
  .logo-img {
    width: 6rem;
    margin-left: 1rem;
  }
`;
