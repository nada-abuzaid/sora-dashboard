import React from 'react';
import { useSelector } from 'react-redux';
import WelcomeCarousel from '../pagesComponents/Dashboard/WelcomeCarousel';
import Chartt from '../pagesComponents/Dashboard/Charts/Chart';
import Coins from '../pagesComponents/Dashboard/Coins';
import { Wrapper, CoinsStyle } from '../styles/dashboard';
import Statistics from '../pagesComponents/Dashboard/StatisticNumbers';
import Subsecribe from '../pagesComponents/Dashboard/Subsecribe/Subsecribe';

export default function Dashboard() {
  const { open } = useSelector((state) => state.upgrade.value);
  return (
    <>
      <WelcomeCarousel />
      {
        open && <Subsecribe />
      }
      <Statistics />
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
