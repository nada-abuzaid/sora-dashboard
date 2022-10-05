import PropTypes from 'prop-types';
import React from 'react';
import SubscriptionWrapper from './styles';
import { subsecribtionType } from '../../../utils';

export default function Subscription({ type }) {
  return (
    <SubscriptionWrapper type={type}>{subsecribtionType(type)}</SubscriptionWrapper>
  );
}

Subscription.prototypes = {
  type: PropTypes.string.isRequired,
};
