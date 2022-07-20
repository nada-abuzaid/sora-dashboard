import React from 'react';
import PRO from '../../../assets/svgs/PRO.svg';
import '../../../css/typography.css';
import { UpgradeStyle } from './styles';

export default function Upgrade({ isOpen }) {
  return (
    <UpgradeStyle isOpen={isOpen}>
      <div className='upgrade'>
        <img src={PRO} alt='Upgrade to PRO' className='upgrade-img' />
        <h3 className='title'>Upgrade to Premium</h3>
        <p className='desc'>
          Upgrade to unlock premium data for your employers.
        </p>
        <button className='btn-more'>Learn more</button>
      </div>
    </UpgradeStyle>
  );
}