import styled from 'styled-components';

const CoinsStyle = styled.div`
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
    text-align: left;
    p {
      text-align: left;
    }
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

export default CoinsStyle;
