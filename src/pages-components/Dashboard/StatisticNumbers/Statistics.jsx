import React from "react";
import styled from "styled-components";
import Statistic from "./Statistic";

export default function Statistics() {
  const data = [
    {
      number: "250",
      title: "Employees",
    },
    {
      number: "100",
      title: "Female",
    },
    {
      number: "50",
      title: "Male",
    },
    {
      number: "25",
      title: "Transfemale",
    },
    {
      number: "25",
      title: "Transmale",
    },
    {
      number: "25",
      title: "None or agender",
    },
    {
      number: "20",
      title: "Other",
    },
    {
      number: "05",
      title: "Prefer not to say",
    },
  ];
  return (
    <StatisticsStyle>
      {data.map((item, index) => {
        return (
          <Statistic key={index} number={item.number} title={item.title} />
        );
      })}
    </StatisticsStyle>
  );
}

const StatisticsStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  /* height: 5rem; */
  border-radius: 10px;
  box-shadow: 1px 1px 4px 2px #e1e1e1;
  @media only screen and (max-width: 990px) {
    flex-wrap: wrap;
  }
`;
