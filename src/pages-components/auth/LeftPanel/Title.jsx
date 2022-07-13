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
    width: 6rem;
  }
  .section-title {
    font-family: 'DM Serif Text';
    font-size: 34px;
    text-align: center;
  }
`;
Title.propTypes = {
  title: PropTypes.string,
};
