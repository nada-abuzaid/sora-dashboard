import React from 'react';
import { useSelector } from 'react-redux';
import Chartt from './Chart';
import Coins from '../Coins';
import { Wrapper } from './style';
import { CoinsWrapper } from '../Coins/style';

export default function Charts() {
  const { isOpen } = useSelector((state) => state.sidebar.value);

  return (
    <>
      <Wrapper isOpen={isOpen}>
        <Chartt type="doughnut" />
        <Chartt type="bar" />
      </Wrapper>
      <CoinsWrapper isOpen={isOpen}>
        <Coins type="Earned coins" coins="10 000 coins" price="£100.00" />
        <Coins type="Redeemed coins" coins="5 000 coins" price="£50.00" />
      </CoinsWrapper>
      <Chartt type="bar-health" />
    </>
  );
}
