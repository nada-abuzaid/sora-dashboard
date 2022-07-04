import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { Chart, ArcElement, registerables } from "chart.js";

export default function HorizontalChart() {
  Chart.register(...registerables);
  Chart.register(ArcElement);

  const data = {
    labels: ["Parenthood", "Infertility", "Mental Health", "Diet & Nutrition"],
    datasets: [
      {
        data: [70, 50, 25, 15],
        backgroundColor: ["#73314F", "#275C61", "#89AAAD", "#E3E3E3"],
        hoverBackgroundColor: ["#80445f", "#346266", "#a4c6c9", "#eeeeee"],
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: "y",
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        ticks: {
          color: "#495057",
          crossAlign: "far", // to align the label to the left
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <ChartStyle>
      <Bar data={data} options={options} />
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
  @media only screen and (max-width: 990px) {
    width: 100%;
    padding: 1rem;
  }
`;
