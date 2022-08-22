import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import PropTypes from 'prop-types';
import coinsImg from '../../../assets/svgs/coin1.svg';
import coinImg from '../../../assets/svgs/coin.svg';
import CoinsStyle from './style';

export default function Coins({ type, coins, price }) {
  const [VerticalChartData] = useState({
    labels: ['Donations', 'Health Sessions', 'Products'],
    datasets: [
      {
        data: [10, 30, 60],
        backgroundColor: ['#9E6F85', '#9E6F85', '#73314F'],
        hoverBackgroundColor: '#9E6F85',
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
          display: false,
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
    <CoinsStyle type={type}>
      <div className="texts">
        <p className="earned">{type}</p>
        <p className="coins">{coins}</p>
        <span className="line" />
        <p className="price">{price}</p>
      </div>

      {type === 'Earned coins' ? (
        <>
          <img src={coinsImg} className="coin-img head" alt="Coin-head" />
          <img src={coinImg} className="coin-img coin" alt="Coins" />
        </>
      ) : (
        <Chart
          type="bar"
          data={VerticalChartData}
          options={VerticalOptions}
          className="chart"
        />
      )}
    </CoinsStyle>
  );
}

Coins.propTypes = {
  type: PropTypes.string.isRequired,
  coins: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
