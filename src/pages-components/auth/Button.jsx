import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import '../../css/typography.css';

export default function Button({ text }) {
  return (
    <Div>
      <Link to='/'>{text}</Link>
    </Div>
  );
}

const Div = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  padding: 0.6rem;
  width: 50%;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  a {
    color: ${({ theme: { colors } }) => colors.primaryLight};
    font-family: 'Nunito Sans';
    font-weight: 600;
  }
`;
