import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart } from 'primereact/chart';
import coinsImg from '../../../assets/svgs/coin1.svg'
import coinImg from '../../../assets/svgs/coin.svg'

export default function Coins({ type, coins, price }) {
  const [VerticalChartData] = useState({
    labels: ['Donations', 'Health Sessions', 'Products'],
    datasets: [
      {
        data: [10, 30, 60],
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
    <Div type={type}>
      <div className='texts'>
        <p className='earned'>{type}</p>
        <p className='coins'>{coins}</p>
        <span className='line'></span>
        <p className='price'>{price}</p>
      </div>
      <>
        {type === 'Earned coins' ? (
          <>
            <img
              src={coinsImg}
              className='coin-img head'
              alt='Coin Image'
            />
            <img
              src={coinImg}
              className='coin-img coin'
              alt='Coin Image'
            />
          </>
        ) : (
          <>
            <Chart
              type='bar'
              data={VerticalChartData}
              options={VerticalOptions}
              className='chart'
            />
          </>
        )}
      </>
    </Div>
  );
}

const Div = styled.div`
  ${({ type }) =>
    type === 'Earned coins'
      ? `background-color: rgba(39, 92, 97, 0.2);`
      : `background-color: #fff; box-shadow: 1px 1px 4px 2px #E1E1E1;`}
  border-radius: 15px;
  padding: 1rem 1.5rem;
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
  .coin-img {
    position: absolute;
    right: 0;
    &.coin {
      bottom: 0px;
      border-radius: 0 0 8px 0;
    }
    &.head {
      top: 0px;
    }
  }
  .texts {
    display: flex;
    flex-direction: column;
    width: 50%;
    .earned {
      font-size: 1.5rem;
      font-family: 'DM Serif Text', serif;
    }
    .coins {
      font-family: 'Nunito Sans', sans-serif;
      font-size: 1.2rem;
    }
    .line {
      width: 30%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.lightGray1};
      margin: 0.5rem 0;
    }
    .price {
      font-family: 'Nunito Sans', sans-serif;
      font-size: 1.2rem;
    }
  }
  .chart {
    height: 80%;
    width: 50%;
  }
`;
