import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

export default function DoughnutChart() {
  Chart.register(ArcElement);
  const data = {
    labels: [
      'Tracking health - 30%',
      'Reading articles - 10%',
      'Using the care plan - 50%',
      'Other - 10',
    ],
    datasets: [
      {
        data: [30, 10, 50, 10],
        backgroundColor: ['#73314F', '#275C61', '#89AAAD', '#E3E3E3'],
        hoverBackgroundColor: ['#80445f', '#346266', '#a4c6c9', '#eeeeee'],
      },
    ],
  };

  const options = {
    cutout: '60%',
    responsive: true,
    elements: {
      arc: {
        borderWidth: 0,
      },
      padding: 0,
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 15,
          color: '#495057',
          usePointStyle: true,
          boxWidth: 7,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
      <ChartStyle>
        <StyledDoughnut options={options} data={data} />
      </ChartStyle>
  );
}

const ChartStyle = styled.div`
  box-shadow: 1px 1px 4px 2px #e1e1e1;
  width: 100%;
  border-radius: 15px;
  padding: 3.5rem 1.5rem 1.5rem 1.5rem;
  height: 100%;
  max-height: 100%;
  position: relative;
  margin-right: 1em;
  max-width: 50%;
  p {
    font-family: 'DM Serif Text';
    font-size: 1.3rem;
    position: absolute;
    top: 0.5rem;
  }
  @media only screen and (max-width: 990px) {
    width: 100%;
    padding: 1rem;
  }
`;

const StyledDoughnut = styled(Doughnut)`
  width: 30%;
  height: 100%;
`;
