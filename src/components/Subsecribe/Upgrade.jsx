import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setPro } from '../../store';
import PRO from '../../assets/svgs/PRO.svg';
import '../../styles/typography.css';
import { UpgradeStyle } from './styles';

export default function Upgrade({ isOpen }) {
  const dispatch = useDispatch();
  return (
    <UpgradeStyle isOpen={isOpen}>
      <div className="upgrade">
        <img src={PRO} alt="Upgrade to PRO" className="upgrade-img" />
        <h3 className="title">Upgrade to Premium</h3>
        <p className="desc">
          Upgrade to unlock premium data for your employers.
        </p>
        <button
          className="btn-more"
          type="button"
          onClick={() => dispatch(setPro({ open: true }))}
        >
          Learn more
        </button>
      </div>
    </UpgradeStyle>
  );
}

Upgrade.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
