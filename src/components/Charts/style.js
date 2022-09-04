import styled from 'styled-components';

const ChartStyle = styled.div`
  box-shadow: 1px 1px 4px 2px #e1e1e1;
  width: 100%;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  height: 20rem;
  max-height: 20rem;
  position: relative;
  &:last-child {
    width: 90%;
    height: 100%;
    @media only screen and (max-width: 1200px) {
  ${({ isOpen }) => isOpen && ' width: 100%; '}
  }
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }
  p {
    font-family: "DM Serif Text";
    font-size: 1.75rem;
    text-align: left !important;
  }
  .chart {
    width: 85%;
    height: 90%;
    margin-top: 1rem;
    max-height: 90%;
  }
  .chart-bar {
    width: 100%;
    height: 100%;
    max-height: 85%;
    padding: 1.5rem;
    @media only screen and (max-width: 900px) {
      .p-chart{
        height: 60% !important;
        overflow-y: scroll;
      }
      height: 90%;
    }
  }
  .texts {
    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
          font-family: "Nunito Sans", sans-serif;

      text-decoration: underline;
      font-size: 1rem;
    }
    .text2 {
      font-weight: 100;
          font-family: "Nunito Sans", sans-serif;

      font-size: 1rem;
      @media only screen and (max-width: 900px) {
        font-size: 0.9rem;
      }
    }
  }
  .topThree{
    position: absolute;
    background-color: #E6EBEC;
    top: 1rem;
    right: 1.5rem;
    padding: 0.6rem 1.4rem;
    border-radius: 6px;
    .topThree-title{
      font-size: 1.125rem;
      font-family: 'DM Serif Text';
    }
    .top-item{
      font-family: "Nunito Sans", sans-serif;
      font-size: 0.75rem;
      display: inline;
    }
    .top-number{
      font-family: "Nunito Sans", sans-serif;
      font-weight: bold;
      display: inline;
      font-size: 0.75rem;
    }
    .topthree-item{
      display: block;
      font-size: 0.75rem;
    }
    @media screen and (max-width: 800px) {
      position: sticky;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  gap: 2rem;
  position: relative;
  @media only screen and (max-width: 1200px) {
  ${({ isOpen }) => isOpen && ` flex-direction: column;
    width: 100%; `}
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

export { ChartStyle, Wrapper };
