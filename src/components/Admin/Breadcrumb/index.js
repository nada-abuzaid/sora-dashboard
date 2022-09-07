import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

export default function Breadcrumb({ companyName }) {
  return (
    <BreadcrumbStyle>
      <p>Employers’ list</p>
      <IoIosArrowForward />
      <span>{companyName}</span>
    </BreadcrumbStyle>
  );
}

const BreadcrumbStyle = styled.div`
display: flex;
align-items: center;
width: 90%;
font-size: 1rem;  
font-family: "Nunito Sans", sans-serif;
font-weight: bold;
gap: 1rem;
p{
  color: #979797;
}
span {
  color: ${({ theme: { colors } }) => colors.primary};
}
`;
