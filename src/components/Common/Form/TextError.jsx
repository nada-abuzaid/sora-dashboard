import React from 'react';
import PropTypes from 'prop-types';
import { TextErrorStyle } from '../../../styles/FormStyle';

export default function TextError({ children }) {
  return <TextErrorStyle>{children}</TextErrorStyle>;
}

TextError.propTypes = {
  children: PropTypes.node.isRequired,
};
