import React, { useState } from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

export default function BarChart() {
  Chart.register(ArcElement);
  const [data, setData] = useState({
    labels: [
      "Tracking health - 30%",
      "Reading articles - 10%",
      "Using the care plan - 50%",
      "Other - 10",
    ],
    datasets: [
      {
        data: [30, 10, 50, 10],
        backgroundColor: ["#73314F", "#275C61", "#89AAAD", "#E3E3E3"],
        hoverBackgroundColor: ["#80445f", "#346266", "#a4c6c9", "#eeeeee"],
      },
    ],
  });

  return (
    <ChartStyle>
      <div className="chart">
        <Doughnut data={data} />
      </div>
    </ChartStyle>
  );
}

const ChartStyle = styled.div`
  box-shadow: 1px 1px 4px 2px #e1e1e1;
  width: 90%;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  height: 100%;
  max-height: 100%;
  p {
    font-family: "DM Serif Text";
    font-size: 1.3rem;
  }
  .chart {
    width: 85%;
    height: 95%;
  }

  @media only screen and (max-width: 990px) {
    width: 100%;
    padding: 1rem;

    .chart {
      width: 95%;
      height: 95%;
    }
  }
`;
