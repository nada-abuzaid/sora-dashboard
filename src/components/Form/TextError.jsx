import React from 'react';
import PropTypes from 'prop-types';
import { TextErrorStyle } from '../styled/FormStyles';

export default function TextError({ children }) {
  return <TextErrorStyle className="invalid">{children}</TextErrorStyle>;
}

TextError.propTypes = {
  children: PropTypes.node.isRequired,
};
