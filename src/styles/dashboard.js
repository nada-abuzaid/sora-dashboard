import styled from 'styled-components';

const AccountStyle = styled.div`
  box-shadow: 1px 1px 4px 2px #e1e1e1;
  width: 85%;
  border-radius: 15px;
  padding: 2.5rem;
  height: 100%;
  max-height: 100%;
  background-color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-family: "DM Serif Text", serif;
      font-size: 1.4rem;
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

const ContactStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  height: 80vh;
  p:first-child {
    font-family: "DM Serif Text", serif;
    font-size: 2rem;
  }
  .contact-email,
  .email {
    font-family: "Nunito Sans", serif;
    font-size: 1.2rem;
    color: ${({ theme: { colors } }) => colors.black};
  }
  .email {
    font-weight: bold;
    text-decoration: underline;
  }
  .image {
    width: 80%;
    height: 70%;
    margin-top: 3rem;
  }
`;

export {
  AccountStyle, CoinsStyle, ContactStyle,
};
