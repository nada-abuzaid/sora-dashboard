import React from 'react';
import Scribbles from '../../../assets/svgs/Scribbles.svg';
import PropTypes from 'prop-types';
import { TitleStyle } from './styles';
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

Title.propTypes = {
  title: PropTypes.string,
};
