import React from "react";
import styled from "styled-components";
import DashboardLayout from "../components/Layout/DashboardLayout";
import Statistics from "../pages-components/Dashboard/StatisticNumbers/Statistics";
import Chartt from "../pages-components/Dashboard/TopFeatures/Chart";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Statistics />
      <Wrapper>
        <Chartt type="doughnut" />
        <Chartt type="bar" />
      </Wrapper>
      <Chartt type="bar-health" />
    </DashboardLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  gap: 2rem;
`;