import React from 'react';
import SoraImg from '../../assets/svgs/Frame.svg';
import Arrow from '../../assets/svgs/Arrow.svg';
import { Shadow, Wrapper } from './styles';

export default function MobileScreen() {
  return (
    <Wrapper>
      <img src={SoraImg} alt="Sora App!" className="background" />
      <img src={Arrow} alt="Sora App!" className="arrow" />
      <Shadow className="shadow" />
    </Wrapper>
  );
}
