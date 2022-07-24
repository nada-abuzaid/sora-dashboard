import React, { useState } from 'react';
import { Chart as ChartComponents } from 'primereact/chart';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ChartStyle from './style';

export default function Chart({ type }) {
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
        backgroundColor: ['#73314F', '#9E6F85', '#9E6F85', '#9E6F85'],
        hoverBackgroundColor: ['#80445f', '#9e6f8597', '#9e6f8597', '#9e6f8597'],
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
        backgroundColor: '#4F7D7D',
        hoverBackgroundColor: '#4f7d7dd6',
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
        <div className="texts">
          <p>Health conditions</p>
          <p className="text2">
            Based on the logged data of your employees in SORA.
          </p>
          <Link to="/dashboard/charts">Find resources</Link>
        </div>
      )}

      <div className={type === 'bar-health' ? 'chart-bar' : 'chart'}>
        <ChartComponents
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
}

Chart.propTypes = {
  type: PropTypes.string.isRequired,
};
