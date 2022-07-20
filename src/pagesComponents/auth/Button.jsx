import { Link } from 'gatsby';
import React from 'react';
import { ButtonStyle } from './styles';
import '../../css/typography.css';

export default function Button({ text, link }) {
  return (
    <ButtonStyle>
      <Link to={link}>{text}</Link>
    </ButtonStyle>
  );
}
