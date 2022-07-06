import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import '../../../css/typography.css';

export default function Title({ title }) {
  return (
    <TitleStyle>
      <StaticImage
        src='../../../assets/svgs/Scribbles.svg'
        alt='Scribbles'
        className='scribbles'
      />
      <p className='section-title'>{title}</p>
    </TitleStyle>
  );
}

const TitleStyle = styled.div`
  width: 65%;
  position: relative;

  .gatsby-image-wrapper.gatsby-image-wrapper-constrained {
    position: absolute;
  }

  .gatsby-image-wrapper.gatsby-image-wrapper-constrained img {
    position: absolute;
    left: -2rem;
    top: 1rem;
  }

  .section-title {
    font-family: 'DM Serif Display', 'serif';
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-top: 5rem;
  }
`;
