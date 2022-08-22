import React from 'react';
import Chartt from './Chart';
import Coins from '../Coins';
import { Wrapper } from '../../../styles';
import CoinsStyle from '../Coins/style';

export default function Charts() {
  return (
    <>
      <Wrapper>
        <Chartt type="doughnut" />
        <Chartt type="bar" />
      </Wrapper>
      <CoinsStyle>
        <Coins type="Earned coins" coins="10 000 coins" price="£100.00" />
        <Coins type="Redeemed coins" coins="5 000 coins" price="£50.00" />
      </CoinsStyle>
      <Chartt type="bar-health" />
    </>
  );
}
