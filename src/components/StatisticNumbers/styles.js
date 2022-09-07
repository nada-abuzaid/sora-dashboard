import styled from 'styled-components';

const StatisticStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0.5rem;
  width: 20%;
  justify-content: center;
  align-items: center;
  position: relative;
  :hover,
  :nth-child(1) {
    background-color: ${({ theme: { colors } }) => colors.lightGray3};
  }
  :first-child,
  :last-child {
    border-radius: 10px 0 0 0;
  }
  ::after {
    content: '';
    height: 70%;
    width: 1px;
    right: 0;
    position: absolute;
    background-color: ${({ theme: { colors } }) => colors.lightGray3};
  }
  .statistic-number {
    font-family: "DM Serif Text", sans-serif;
    font-size: 1.75rem;
  }
  p {
    font-size: 0.8rem;
    font-family: "Nunito Sans", sans-serif;
    margin-top: 0;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    width: 25%;
  }
`;

const StatisticsStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  min-width: 90%;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 2px #e1e1e1;
  @media only screen and (max-width: 990px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export { StatisticStyle, StatisticsStyle };
