import React from 'react';
import Logo from '../assets/svgs/Logo.svg';
import styled from 'styled-components';

export default function Header() {
  return (
    <Div>
      <img className='logo-img' src={Logo} alt='Logo Img' />
    </Div>
  );
}

const Div = styled.div`
  height: 3.4rem;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(224, 224, 224, 0.2),
    0 6px 20px 0 rgba(201, 201, 201, 0.19);
  .logo-img {
    width: 6rem;
    margin-left: 1rem;
  }
`;
