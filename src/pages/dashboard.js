import React from 'react';
import styled from 'styled-components';
import { DashboardLayout } from '../components';
import {
  Statistics,
  DoughnutChart,
  HorizontalChart,
} from '../pages-components';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Statistics />
      <Wrapper>
        <DoughnutChart />
        <HorizontalChart />
      </Wrapper>
    </DashboardLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  max-height: 250px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;
