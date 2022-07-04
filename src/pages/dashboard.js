import React from "react";
import styled from "styled-components";
import DashboardLayout from "../components/Layout/DashboardLayout";
import Statistics from "../pages-components/Dashboard/StatisticNumbers/Statistics";
import BarChart from "../pages-components/Dashboard/Charts/BarChart";
import HorizontalChart from "../pages-components/Dashboard/Charts/HorizontalChart";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Statistics />
      <Wrapper>
        <BarChart />
        <HorizontalChart />
      </Wrapper>
    </DashboardLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  gap: 2rem;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;
