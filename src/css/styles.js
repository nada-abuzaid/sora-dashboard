import styled from 'styled-components';

const AccountStyle = styled.div`
  box-shadow: 1px 1px 4px 2px #e1e1e1;
  width: 90%;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  height: 100%;
  max-height: 100%;
  background-color: ${({ theme: { colors } }) => colors.white};
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-family: 'DM Serif Text', serif;
      font-size: 1.2rem;
    }
    .edit-icon {
      background: none;
      border: none;
      font-size: 1.5rem;
      color: ${({ theme: { colors } }) => colors.lightGray1};
      cursor: pointer;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  gap: 2rem;
  position: relative;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

const CoinsStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  gap: 2rem;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

export { AccountStyle, Wrapper, CoinsStyle };
