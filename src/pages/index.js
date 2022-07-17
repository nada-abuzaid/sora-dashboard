import React from 'react';
import styled from 'styled-components';
import { DashboardLayout } from '../components';
import WelcomeCarousel from '../pages-components/WelcomeCarousel';
import { Statistics } from '../pages-components';
import Chartt from '../pages-components/Dashboard/Charts/Chart';

export default function Dashboard() {
  return (
    <>
      <WelcomeCarousel />
      <DashboardLayout>
        <Statistics />
        <Wrapper>
          <Chartt type='doughnut' />
          <Chartt type='bar' />
        </Wrapper>
        <Chartt type='bar-health' />
      </DashboardLayout>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  max-height: 250px;
  gap: 2rem;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;
