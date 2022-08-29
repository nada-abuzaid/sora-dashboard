import React from 'react';
import styled from 'styled-components';
import truncate from '../../../utils/Admin/emailsLength';

export default function Emails({ emails, setIsOpen, isOpen }) {
  return <Email onClick={() => setIsOpen(!isOpen)}>{truncate(emails)}</Email>;
}

const Email = styled.button`
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: underline;
`;
