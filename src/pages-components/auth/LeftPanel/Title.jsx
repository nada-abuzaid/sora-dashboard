import React from 'react';
import styled from 'styled-components';
import Scribbles from '../../../assets/svgs/Scribbles.svg';
import PropTypes from 'prop-types';
import '../../../css/typography.css';

export default function Title({ title }) {
  return (
    <TitleStyle>
      <img src={Scribbles} alt='Scribbles' className='scribbles' />
      <p className='section-title'>{title}</p>
    </TitleStyle>
  );
}

const TitleStyle = styled.div`
  width: 65%;
  position: relative;
  margin-top: 5rem;

  .scribbles {
    position: absolute;
    left: -1.5rem;
    top: -5rem;
  }

  .section-title {
    font-family: 'DM Serif Display';
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
`;

Title.propTypes = {
  title: PropTypes.string,
};
