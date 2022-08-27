import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import subsecribtionType from '../../utils/subsecribe';

export default function Subscription({ type }) {
  return (
    <SubscriptionWrapper type={type}>{subsecribtionType(type)}</SubscriptionWrapper>
  );
}

Subscription.prototypes = {
  type: PropTypes.string.isRequired,
};

const SubscriptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 45%;
    border-radius: 6px;
    font-family: "Nunito Sans", serif;
    font-size: 0.9rem;
    padding: 0.5rem;
    ${({ type }) => (type === '1' ? `
    background-color: #CEBBC3;
    color: #000;
    ` : `
    background-color: #73314F;
    color: #fff;
    `)}
`;
