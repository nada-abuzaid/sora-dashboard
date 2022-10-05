import React from 'react';
import propTypes from 'prop-types';

export default function Mailto({
  email, className, ...props
}) {
  return (
    <a href={`mailto:${email}`} className={className}>
      {props.children}
    </a>
  );
}

Mailto.propTypes = {
  email: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
