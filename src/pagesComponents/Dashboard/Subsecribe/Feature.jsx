import React from 'react';
import { GoCheck } from 'react-icons/go';
import PropTypes from 'prop-types';
import { FeatureStyle } from './styles';

export default function Feature({ featureName }) {
  return (
    <FeatureStyle>
      <div className="icon">
        <GoCheck />
      </div>
      <p>{featureName}</p>
    </FeatureStyle>
  );
}

Feature.propTypes = {
  featureName: PropTypes.string.isRequired,
};
