import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
        borderRadius: '5',
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
        borderRadius: '8',
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
      ) : type === 'doughnut' ? (
        <p>Top features used</p>
      ) : (
        <div className='texts'>
          <p>Health conditions</p>
          <p className='text2'>
            Based on the logged data of your employees in SORA.
          </p>
          <Link to='/dashboard/charts'>Find resources</Link>
        </div>
      )}

      <div className={type === 'bar-health' ? 'chart-bar' : 'chart'}>
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
  width: 100%;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  height: 100%;
  max-height: 100%;
  &:last-child {
    width: 90%;
  }
  p {
    font-family: 'DM Serif Text';
    font-size: 1.2rem;
  }
  .chart {
    width: 85%;
    height: 90%;
    margin-top: 1rem;
  }
  .chart-bar {
    width: 100%;
    height: 80%;
    max-height: 85%;
  }
  .texts {
    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      font-family: 'Nunito Sans';
      text-decoration: underline;
    }
    .text2 {
      font-weight: 100;
      font-family: 'Nunito Sans';
      font-size: 0.9rem;
    }
  }
`;
