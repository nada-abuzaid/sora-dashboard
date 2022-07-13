import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import styled from 'styled-components';

const Chartt = ({ type }) => {
  const [chartData] = useState({
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
  });

  const [lightOptions] = useState({
    cutout: '60%',
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          color: '#495057',
          usePointStyle: true,
          boxWidth: 7,
        },
      },
    },
    maintainAspectRatio: false,
    scale: {
      y: { beginAtZero: true },
    },
  });

  const [HorizontalChartData] = useState({
    labels: ['Parenthood', 'Infertility', 'Mental Health', 'Diet & Nutrition'],
    datasets: [
      {
        data: [70, 50, 25, 15],
        backgroundColor: ['#73314F', '#275C61', '#89AAAD', '#E3E3E3'],
        hoverBackgroundColor: ['#80445f', '#346266', '#a4c6c9', '#eeeeee'],
      },
    ],
  });

  const horizontalOptions = {
    responsive: true,
    indexAxis: 'y',
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
          color: '#495057',
          crossAlign: 'far', // to align the label to the left
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const [VerticalChartData] = useState({
    labels: [
      'Infertility',
      'Stress',
      'PCOS',
      'Diabetes',
      'Hair loss',
      'Heart Disease',
      'Endo',
      'Menopause',
      'Mental Health',
    ],
    datasets: [
      {
        data: [20, 10, 25, 15, 10, 40, 20, 10, 25, 15],
        backgroundColor: '#73314F',
        hoverBackgroundColor: '#80445f',
      },
    ],
  });

  const VerticalOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#495057',
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <ChartStyle>
      {type === 'bar' ? (
        <p>Top topics of interest</p>
      ) : (
        <p>Top features used</p>
      )}

      <div className='chart'>
        <Chart
          type={type === 'doughnut' ? 'doughnut' : 'bar'}
          data={
            type === 'bar'
              ? HorizontalChartData
              : type === 'bar-health'
              ? VerticalChartData
              : chartData
          }
          options={
            type === 'bar'
              ? horizontalOptions
              : type === 'bar-health'
              ? VerticalOptions
              : lightOptions
          }
          style={{ height: '90%' }}
        />
      </div>
    </ChartStyle>
  );
};

export default Chartt;

const ChartStyle = styled.div`
  box-shadow: 1px 1px 4px 2px #e1e1e1;
  width: 90%;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  height: 100%;
  max-height: 100%;
  p {
    font-family: 'DM Serif Text';
    font-size: 1.3rem;
  }
  .chart {
    width: 85%;
    height: 95%;
  }
`;
