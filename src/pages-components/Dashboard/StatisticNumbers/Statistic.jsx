import React from "react";
import styled from "styled-components";

export default function Statistic({ number, title }) {
  return (
    <StatisticStyle>
      <span className="statistic-number">{number}</span>
      <p className="statistic-title">{title}</p>
    </StatisticStyle>
  );
}

const StatisticStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 20%;
  justify-content: center;
  align-items: center;
  position: relative;
  :hover,
  :nth-child(1) {
    background-color: ${({ theme: { colors } }) => colors.lightGray3};
  }
  :first-child, :last-child {
    border-radius: 10px 0 0 0;
  }
  ::after {
    content: "";
    height: 70%;
    width: 1px;
    right: 0;
    position: absolute;
    background-color: ${({ theme: { colors } }) => colors.lightGray3};
  }
  .statistic-number {
    font-family: "DM Serif Text";
    font-size: 1.7rem;
  }
  p {
    font-size: 0.7rem;
    font-family: NunitoSans;
  }

  @media only screen and (max-width: 600px) {
    width: 25%;
  }
`;
