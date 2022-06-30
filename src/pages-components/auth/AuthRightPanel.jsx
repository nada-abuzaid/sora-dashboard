import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const AuthRightPanel = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../assets/images/auth-background.png"
        formats={['auto', 'webp', 'avif']}
        alt="Sora App!"
      />
      <StaticImage
        src="../../assets/images/sora-splash.png"
        formats={['auto', 'webp', 'avif']}
        style={{
          position: 'absolute',
          top: 0,
          flex: 1,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 2,
        }}
        className="animatedImage"
        alt="Sora App!"
      />
      <AnimatedShadow className="shadow" />
    </Wrapper>
  );
};

const AnimatedShadow = styled.div`
  background: #93b0b3;
  opacity: 0.5;
  position: absolute;
  bottom: 100px;
  filter: blur(2px);
  left: 30px;
  z-index: 1;
  right: 0;
  margin: auto;
  height: 30px;
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
  background: #ccddde;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 70px;
    }
  }
  .animatedImage {
    animation: MoveUpDown 3s ease-in-out infinite;
    transform: scale(0.8);
  }

  @media only screen and (max-width: 990px) {
    height: 60vh;
    flex: 0.6;
    @keyframes MoveUpDown {
      0%,
      100% {
        bottom: 20px;
      }
      50% {
        bottom: 60px;
      }
    }
    .animatedImage {
      animation: MoveUpDown 2s ease-in-out infinite;
      transform: scale(0.7);
    }
    ${AnimatedShadow} {
      left: 20px;
      @keyframes ShadowAnimation {
        0%,
        100% {
          width: 120px;
          border-radius: 75%;
        }
        50% {
          width: 80px;
          border-radius: 50%;
        }
      }
      animation: ShadowAnimation 2s ease-in-out infinite;
    }
  }
`;

export default AuthRightPanel;
