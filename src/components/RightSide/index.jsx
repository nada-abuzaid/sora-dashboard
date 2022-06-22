import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import colors from '../../constants/colors';

const RightSide = () => {
  return (
    <Wrapper>
      {/* <StaticImage
        src='../../assets/images/auth-background.png'
        formats={['auto', 'webp', 'avif']}
        alt='Sora App!'
      /> */}
      <StaticImage
        src='../../assets/svgs/Mobile.svg'
        formats={['auto', 'webp', 'avif']}
        style={{
          position: 'absolute',
          flex: 1,
          left: '13rem',
          zIndex: 2,
        }}
        className='animatedImage'
        alt='Sora App!'
      />
      <AnimatedShadow className='shadow' />
    </Wrapper>
  );
};

const AnimatedShadow = styled.div`
  background: ${colors.liteGreen};
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
  width: 50%;
  flex: 1;
  background: ${colors.secondary};
  height: calc(100vh - 3.4rem);
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;

  .gatsby-image-wrapper img {
    width: 75%;
  }
  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 20px;
    }
  }
  .animatedImage {
    animation: MoveUpDown 3s ease-in-out infinite;
    transform: scale(0.8);
  }
`;

export default RightSide;
