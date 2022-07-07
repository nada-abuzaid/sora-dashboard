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
  width: 45%;
  position: relative;
  margin: 3rem 2rem 0 2rem;
  .scribbles {
    position: absolute;
    left: -3rem;
    top: -2.5rem;
    width: 6rem;
  }

  .section-title {
    font-family: 'DM Serif Text';
    font-size: 33px;
    text-align: center;
    margin-bottom: 0;
  }
`;

Title.propTypes = {
  title: PropTypes.string,
};
