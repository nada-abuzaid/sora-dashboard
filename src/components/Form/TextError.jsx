import React from 'react';
import { TextErrorStyle } from '../styled/FormStyles';

function TextError({ children }) {
  return <TextErrorStyle className='invalid'>{children}</TextErrorStyle>;
}

export default TextError;
