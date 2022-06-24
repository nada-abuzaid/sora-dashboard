import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const RightSide = () => {
  return (
    <Wrapper>
      {/* <StaticImage
        src='../assets/svgs/Frame.svg'
        formats={['auto', 'webp', 'avif']}
        alt='Sora App!'
        className='background'
      /> */}
      <div className="background">
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
      </div>
    </Wrapper>
  );
};

const Shadow = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.5;
  position: absolute;
  bottom: 45px;
  left: 2rem;
  right: 0;
  filter: blur(2px);
  z-index: 1;
  margin: auto;
  height: 2rem;
  border-radius: 75%;
  width: 300px;
  border-radius: 75%;
`;

const Wrapper = styled.div`
  flex: 1;
  height: calc(100vh - 3.4rem);
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;

  .background {
    background-image: url('../assets/svgs/Frame.svg');
  }

  .gatsby-image-wrapper.background {
    width: 100%;
    height: 100vh;
    object-fit: contain;
  }

  .gatsby-image-wrapper.arrow {
    height: 3rem;
  }

  .gatsby-image-wrapper.mobile {
    object-fit: cover;
  }
`;

export default RightSide;
