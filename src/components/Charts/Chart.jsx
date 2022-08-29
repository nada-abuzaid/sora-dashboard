import React from 'react';
import { Chart as ChartComponents } from 'primereact/chart';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ChartStyle } from './style';
import ChartsData from './data';

export default function Chart({ type }) {
  const [
    chartData,
    lightOptions,
    horizontalOptions,
    horizontalChartData,
    verticalChartData,
    verticalOptions,
    topHealthConditionsData,
  ] = ChartsData();

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
              ? horizontalChartData
              : type === 'bar-health'
                ? verticalChartData
                : chartData
          }
          options={
            type === 'bar'
              ? horizontalOptions
              : type === 'bar-health'
                ? verticalOptions
                : lightOptions
          }
          style={{ height: '90%' }}
        />
      </div>
      {
        type === 'bar-health' && (
        <div className="topThree">
          <p className="topThree-title">Top 3 Health conditions</p>
          {
            topHealthConditionsData.map(({ label, percentage }, index) => (
              <div className="topthree-item">
                {' '}
                <span className="top-number">
                  {' '}
                  {index + 1}
                  #
                  {' '}
                </span>
                <p className="top-item">
                  {label}
                  {' '}
                  -
                  {' '}
                  {Math.round(percentage)}
                  {' '}
                  %
                </p>

              </div>

            ))
          }
        </div>
        )
      }
    </ChartStyle>
  );
}

Chart.propTypes = {
  type: PropTypes.string.isRequired,
};
