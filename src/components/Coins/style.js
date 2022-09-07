import styled from 'styled-components';

const CoinsStyle = styled.div`
  ${({ type, isOpen }) => (type === 'Earned coins'
    ? 'background-color: rgba(39, 92, 97, 0.2);width: 100%;'
    : isOpen === false ? 'background-color: #fff; box-shadow: 1px 1px 4px 2px #E1E1E1;width: 90%; justify-content: space-between;' : 'background-color: #fff; box-shadow: 1px 1px 4px 2px #E1E1E1;width: 100%; justify-content: space-between;')}
  border-radius: 15px;
  padding: 1rem 1.5rem;
  height: 10rem;
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
      font-size: 1.625rem;
      font-family: "DM Serif Text", sans-serif;
      @media screen and (max-width: 1000px) {
        font-size: 1.2rem;
      }
    }
    .coins {
      font-family: "Nunito Sans", sans-serif;
      font-size: 1.5rem;
    }
    .line {
      width: 30%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.lightGray1};
      margin: 0.5rem 0;
    }
    .price {
      font-family: "Nunito Sans", sans-serif;
      font-size: 1.2rem;
    }
  }
  .chart {
    height: 80%;
    width: 50%;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
    .texts{
      .earned{
        font-size: 1.5rem;
      }
      .coins{
        font-size: 1.2rem;
      }
      .line{
        margin: 0.2rem;
      }
      .price{
        font-size: 1rem;
      }
    }
  }
`;

const CoinsWrapper = styled.div`
   display: flex;
   flex-direction: row;
   gap: 2rem;
   width: 90%;
   @media only screen and (max-width: 1200px) {
  ${({ isOpen }) => isOpen && ` flex-direction: column;
    width: 100%;`}
  }
   @media screen and (max-width: 900px) {
    width: 98%;
    flex-direction: column;
   }
`;

export { CoinsStyle, CoinsWrapper };
