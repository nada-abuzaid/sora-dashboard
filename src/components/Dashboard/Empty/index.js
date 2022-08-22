import React from 'react';
import EmptySection from './style';
import empty from '../../../assets/svgs/Empty.svg';

export default function Empty() {
  return (
    <EmptySection>
      <p className="title">No employees joined SORA</p>
      <p className="desc">There aren’t employees using the SORA app.</p>
      <img src={empty} alt="Empty" />
    </EmptySection>
  );
}
