import styled from 'styled-components';

const FeatureStyle = styled.div`
  display: flex;
  gap: 0.6rem;
  .icon {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.check};
  }
  p {
    font-family: "Nunito Sans", sans-serif;
    color: ${(props) => props.theme.colors.lightGray4};
  }
`;

const LeftStyle = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .right {
    width: 50%;
    background-color: #275c61;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .mobile-container {
      background-color: #fff;
      width: 60%;
      height: 72%;
      border-radius: 10px;
      filter: drop-shadow(0px 0px 5px #e9e9e9);
      padding: 0.5rem 1rem;
      position: relative;
      .mobile-header {
        display: flex;
        flex-direction: column;
        .premium {
          font-family: "DM Serif Text", sans-serif;
          font-size: 1.8rem;
          color: ${({ theme }) => theme.colors.primary};
          text-align: center;
        }
        .desc {
          color: #404040;
          font-size: 0.85rem;
          text-align: justify;
          width: 85%;
          margin: 0 auto;
          font-family: 'Nunito Sans', sans-serif;
        }
        .line {
          width: 90%;
          height: 1px;
          background-color: ${(props) => props.theme.colors.lightGray};
          margin: 1rem 0;
          align-self: center;
        }
      }
      .mobile-features {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        padding: 0 1rem;
      }
      @media screen and (max-width: 768px) {
        height: 96%;
        margin: 1rem;
      }
    }
    .close-btn {
      color: #fff;
      border: none;
      background: none;
      cursor: pointer;
      font-size: 1.5rem;
      box-shadow: none;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 10;
      opacity: 1;
      @media screen and (max-width: 768px) {
        opacity: 0;
      }
    }
    .scribble {
      position: absolute;
      &:nth-child(3) {
        width: 30%;
        top: -1rem;
        left: 0;
      }
      &:nth-child(4) {
        width: 20%;
        top: 16rem;
        left: 0;
      }
      &:nth-child(5) {
        width: 15%;
        top: 12rem;
        right: -0.5rem;
      }
      &:nth-child(6) {
        width: 6%;
        top: 23rem;
        right: 2rem;
      }
    }
  }
  .left-container {
    width: 50%;
    background-color: #fff;
    padding: 2rem 1rem;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .left {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      p:not(:first-child) {
        color: ${({ theme: { colors } }) => colors.lightGray2};
        padding: 0 2rem;
        text-align: justify;
        font-size: 0.85rem;
      }
      .btn {
        width: 50%;
        padding: 0 2rem;
        button {
          background-color: ${({ theme: { colors } }) => colors.primary};
          color: ${({ theme: { colors } }) => colors.white};
          padding: 0.6rem;
          border-radius: 6px;
          text-align: center;
          border: none;
        }
      }
      .title {
        align-self: center;
        margin-top: 0.2rem;
      }
    }
    .image {
      width: 50%;
      height: 40%;
      margin: 2rem;
    }
  }
`;

const StyledCloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
  opacity: 0;
  @media screen and (max-width: 768px) {
    opacity: 1;
  }
`;

const UpgradeStyle = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  .upgrade {
    gap: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    padding: 4rem 1rem 2rem 1rem;
    margin-top: 2rem;
    background-color: #f4f7f7;
    width: 80%;
    height: 83%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    @media only screen and (max-width: 600px) {
      width: 70%;
    }
    .upgrade-img {
      width: 40%;
      position: absolute;
      top: 0;
      @media screen and (max-width: 600px) {
        top: -1.5rem;
      }
    }
    .title {
      font-family: "DM Serif Text";
      font-size: 1.2rem;
      text-align: center;
      margin-bottom: 0;
      width: 60%;
    }
    .desc {
      font-family: "Nunito Sans";
      text-align: center;
      font-size: 0.9rem;
      width: 100%;
    }
    .btn-more {
      padding: 0.5rem 2rem;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      background: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
      color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
    }
  }
`;

export {
  FeatureStyle, LeftStyle, StyledCloseButton, UpgradeStyle,
};
