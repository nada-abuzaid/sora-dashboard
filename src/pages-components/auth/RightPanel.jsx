import React from 'react';
import styled from 'styled-components';
import SoraImg from '../../assets/svgs/Frame.svg';
import Arrow from '../../assets/svgs/Arrow.svg';
import Mobile from '../../assets/svgs/Mobile.svg';

export default function RightPanel() {
  return (
    <Wrapper>
      <img src={SoraImg} alt='Sora App!' className='background' />
      <img src={Mobile} alt='Sora App!' className='mobile' />
      <img src={Arrow} alt='Sora App!' className='arrow' />
      <Shadow className='shadow' />
    </Wrapper>
  );
}

const Shadow = styled.div`
  background: ${({ theme }) => theme.colors.lightGray2};
  opacity: 0.5;
  position: absolute;
  bottom: 50px;
  filter: blur(2px);
  left: 30px;
  z-index: 1;
  right: 0;
  margin: auto;
  height: 2rem;
  border-radius: 75%;
  @keyframes ShadowAnimation {
    0%,
    100% {
      width: 300px;
      border-radius: 75%;
    }
    50% {
      width: 100px;
      border-radius: 40%;
    }
  }
  animation: ShadowAnimation 3s ease-in-out infinite;
`;

const Wrapper = styled.div`
  flex: 1;
  width: 50%;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  height: calc(100vh - 3.4rem);

  .mobile {
    position: absolute;
    flex: 1;
    left: 30%;
    bottom: 10%;
    z-index: 2;
    height: 80%;
    width: 45%;
  }

  .background {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .arrow {
    height: 3rem;
    position: absolute;
    left: 70%;
    top: 4%;
    width: 5rem;
  }

  @media only screen and (max-width: 1024px) and (min-width: 990px) {
    .mobile {
      width: 60%;
    }
  }
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;
