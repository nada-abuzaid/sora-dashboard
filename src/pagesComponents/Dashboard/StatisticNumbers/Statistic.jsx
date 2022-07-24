import React from 'react';
import PropTypes from 'prop-types';
import { StatisticStyle } from './styles';
import '../../../styles/typography.css';

export default function Statistic({ number, title }) {
  return (
    <StatisticStyle>
      <span className="statistic-number">{number}</span>
      <p className="statistic-title">{title}</p>
    </StatisticStyle>
  );
}

Statistic.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
};

Statistic.defaultProps = {
  number: 250,
  title: 'Employees',
};
