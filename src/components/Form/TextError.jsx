import React from 'react';

function TextError({ children }) {
  return <div className='invalid'>{children}</div>;
}

export default TextError;
