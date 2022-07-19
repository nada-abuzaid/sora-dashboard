import React from 'react';
import styled from 'styled-components';
import { DashboardLayout } from '../components';
import { WelcomeCarousel, Statistics } from '../pages-components';
import Chartt from '../pages-components/Dashboard/Charts/Chart';
import Coins from '../pages-components/Dashboard/Coins/';
import Subsecribe from '../pages-components/Dashboard/Subsecribe/Subsecribe';

export default function Dashboard() {
  return (
    <>
      {/* <WelcomeCarousel /> */}
      <Subsecribe />
      <DashboardLayout>
        <Statistics />
        <Wrapper>
          <Chartt type='doughnut' />
          <Chartt type='bar' />
        </Wrapper>
        <CoinsStyle>
          <Coins type='Earned coins' coins='10 000 coins' price='£100.00'/>
          <Coins type='Redeemed coins' coins='5 000 coins' price='£50.00'/>
        </CoinsStyle>
        <Chartt type='bar-health' />
      </DashboardLayout>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  gap: 2rem;
  position: relative;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

const CoinsStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  gap: 2rem; 
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

