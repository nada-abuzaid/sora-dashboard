import React from 'react';
import styled from 'styled-components';
import Scribbles from '../../../assets/svgs/Scribbles.svg';
import PropTypes from 'prop-types';
import '../../../css/typography.css';

export default function Title({ title }) {
  return (
    <TitleStyle>
      <img src={Scribbles} alt='Scribbles' className='scribbles' />
      <div className='section-title'>
        <p>{title}</p>
      </div>
    </TitleStyle>
  );
}

const TitleStyle = styled.div`
  position: relative;
  .scribbles {
    position: absolute;
    left: -4rem;
    top: -2.5rem;
    width: 6em;
  }
  .section-title {
    font-family: 'DM Serif Text';
    font-size: 2.2em;
    text-align: center;
  }

  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    .scribbles {
      display: none;
    }
    .section-title {
      font-size: 1.8em;
    }
  }
`;
Title.propTypes = {
  title: PropTypes.string,
};
