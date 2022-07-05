import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const RightSide = () => {
  return (
    <Wrapper>
      {/* <div className="background">
        <StaticImage
          src="../assets/svgs/Arrow.svg"
          formats={['auto', 'webp', 'avif']}
          alt="Sora App!"
          className="arrow"
          style={{
            position: 'absolute',
            left: '26rem',
            top: '2rem',
            width: '5rem',
          }}
        />
        <StaticImage
          src="../assets/svgs/Mobile.svg"
          formats={['auto', 'webp', 'avif']}
          style={{
            position: 'absolute',
            flex: 1,
            left: '15rem',
            bottom: '4rem',
            zIndex: 2,
          }}
          className="mobile"
          alt="Sora App!"
        />
        <Shadow className="shadow" />
      </div> */}
      <StaticImage
        src='../../assets/svgs/Frame.svg'
        formats={['auto', 'webp', 'avif']}
        alt='Sora App!'
        className='background'
      />
      <StaticImage
        src='../assets/svgs/Arrow.svg'
        formats={['auto', 'webp', 'avif']}
        alt='Sora App!'
        className='arrow'
        style={{
          position: 'absolute',
          left: '70%',
          top: '5%',
          width: '5em',
        }}
      />
      <StaticImage
        src='../../assets/svgs/Mobile.svg'
        formats={['auto', 'webp', 'avif']}
        style={{
          position: 'absolute',
          flex: 1,
          left: '35%',
          bottom: '10%',
          zIndex: 2,
        }}
        className='mobile'
        alt='Sora App!'
      />
      <Shadow className='shadow' />
    </Wrapper>
  );
};

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
  background: ${({ theme }) => theme.colors.secondary};
  height: calc(100vh - 3.4rem);

  .gatsby-image-wrapper.mobile img {
    width: 75%;
  }

  .gatsby-image-wrapper.background {
    width: 100%;
    height: 100vh;
    object-fit: contain;
  }

  .gatsby-image-wrapper.arrow {
    height: 3rem;
  }
`;

export default RightSide;
