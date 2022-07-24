import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styles';
import '../../styles/typography.css';

export default function Button({ text, link }) {
  return (
    <ButtonStyle>
      <Link to={link}>{text}</Link>
    </ButtonStyle>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
