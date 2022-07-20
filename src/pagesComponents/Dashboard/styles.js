import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 3.4rem;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 4px #b5b5b5;
  background-color: white;
  z-index: 11;
  .menu-icon {
    font-size: 1.5rem;
    margin-left: 1rem;
    font-weight: normal;
    cursor: pointer;
  }
`;

const ASide = styled.div`
  box-shadow: 0px 2px 4px 2px #b5b5b5;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  border-right: 1px solid rgba(82, 82, 82, 0.4);
  overflow: hidden;
  transition: all 0.5s ease;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) =>
    props.isOpen
      ? `
    width:280px;
    `
      : `
    width:80px;
    `}
  .side-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .side-logo {
    display: flex;
    padding: 1.2rem;
    align-items: center;
    justify-content: space-between;
    .close-btn {
      opacity: 0;
      @media only screen and (max-width: 600px) {
        opacity: 1;
      }
    }
    .logo {
      display: flex;
      align-items: center;
      .sora {
        text-transform: uppercase;
        font-family: 'Nunito Sans';
        font-weight: bold;
        color: ${({ theme: { colors } }) => colors.primary};
        font-size: 1.3rem;
        margin-left: 0.5rem;
        ${(props) => (props.isOpen ? null : `display:none`)}
      }
    }
  }
  .side-menu {
    display: flex;
    flex-direction: column;
  }
  .side-menu-item {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: ${({ theme: { colors } }) => colors.primaryDark};

    p {
      font-family: 'Nunito Sans';
      font-size: 1rem;
      margin-left: 0.7rem;
      padding: 1.3rem 0;
      ${(props) => (props.isOpen ? null : `display:none`)}
    }
    .icon {
      margin-left: 1.3rem;
      width: 1.5rem;
      ${(props) => (props.isOpen ? null : `margin: 1.4rem`)}
    }
  }
  .active {
    font-weight: bold;
    background-color: ${({ theme: { colors } }) => colors.lightGray3};
  }
  .footer {
    background-color: ${({ theme: { colors } }) => colors.lightGray3};
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 0.7rem;
      font-family: 'Nunito Sans';
      margin-left: 0.6rem;
      ${(props) => (props.isOpen ? null : `display: none`)}
    }
    span {
      height: 100%;
      padding: 0 0.5rem;
      border-radius: 0.5rem 0 0 0;
      background-color: ${({ theme: { colors } }) => colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      ${(props) =>
        props.isOpen
          ? `border-radius: 0.5rem 0 0 0`
          : `border-radius: 0; width: 100%;`}
    }
  }

  @media only screen and (max-width: 600px) {
    z-index: 100;
    width: 80%;
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.white};
    ${(props) => (props.isOpen ? null : `display: none`)}
  }
`;

const Background = styled.div`
  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 0;
    z-index: 90;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    ${(props) => (props.isOpen ? null : `display: none`)}
  }
`;

const SlideWrapper = styled.div`
  width: 80%;
  height: 80%;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const SlideTitle = styled.p`
  font-family: 'DM Serif Text';
  font-size: 24px;
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.tablet_portrait}) {
    font-size: 22px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    font-size: 16px;
  }
`;

const SlideParagraph = styled.p`
  text-align: justify;
  font-family: 'Nunito Sans';
  margin-bottom: 50px;
  font-size: 16px;
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.tablet_portrait}) {
    margin-bottom: 20px;
    font-size: 14px;
  }
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    font-size: 13px;
    text-align: justify;
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
`;

const ImagesWrapper = styled.div`
  position: relative;
  margin-block: 30px;
`;

export {
    Nav,
    ASide,
    Background,
    SlideWrapper,
    SlideTitle,
    StyledCloseButton,
    SlideParagraph,
    ImagesWrapper
}