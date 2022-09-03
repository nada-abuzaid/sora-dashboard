import React from 'react';
import SoraImg from '../../assets/svgs/Frame.svg';
import Arrow from '../../assets/svgs/Arrow.svg';
import Mobile from '../../assets/svgs/Mobile.svg';

import { Shadow, Wrapper } from './styles';

export default function MobileScreen() {
  return (
    <Wrapper>
      <img src={SoraImg} alt="Sora App!" className="background" />
      <img src={Mobile} alt="Sora App!" className="mobile" />
      <img src={Arrow} alt="Sora App!" className="arrow" />
      <Shadow className="shadow" />
    </Wrapper>
  );
}
