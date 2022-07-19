import React from 'react';
import styled from 'styled-components';
import PRO from '../../../assets/svgs/PRO.svg';
import '../../../css/typography.css';

export default function Upgrade({ isOpen }) {
  return (
    <UpgradeStyle isOpen={isOpen}>
      <div className='upgrade'>
        <img src={PRO} alt='Upgrade to PRO' className='upgrade-img' />
        <h3 className='title'>Upgrade to Premium</h3>
        <p className='desc'>
          Upgrade to unlock premium data for your employers.
        </p>
        <button className='btn-more'>
          Learn more
        </button>
      </div>
    </UpgradeStyle>
  );
}

const UpgradeStyle = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  .upgrade {
    gap: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    padding: 4rem 1rem 2rem 1rem;
    margin-top: 2rem;
    background-color: #f4f7f7;
    width: 80%;
    height: 83%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    @media only screen and (max-width: 600px) {
      width: 70%;
    }
    .upgrade-img {
      width: 40%;
      position: absolute;
      top: 0;
      @media screen and (max-width: 600px) {
        top: -1.5rem;
      }
    }
    .title {
      font-family: 'DM Serif Text';
      font-size: 1.2rem;
      text-align: center;
      margin-bottom: 0;
      width: 60%;
    }
    .desc {
      font-family: 'Nunito Sans';
      text-align: center;
      font-size: 0.9rem;
      width: 100%;
    }
    .btn-more {
      padding: 0.5rem 2rem;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      background: ${({
        theme: {
          colors: { primary },
        },
      }) => primary};
      color: ${({
        theme: {
          colors: { white },
        },
      }) => white};
    }
  }
`;
