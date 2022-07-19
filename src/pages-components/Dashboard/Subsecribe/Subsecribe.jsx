import React, { useState } from 'react';
import '../../../css/modal.css';
import Modal from 'react-modal';
import styled from 'styled-components';
import Title from '../../auth/LeftPanel/Title';
import Button from '../../auth/Button';
import { StaticImage } from 'gatsby-plugin-image';
import Feature from './Feature';
import { AiOutlineClose } from 'react-icons/ai';

export default function Subsecribe() {
  const [modalIsOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
  };

  const features = [
    'Health tracking',
    'Health insights',
    'Access to community',
    'New articles each week',
    'Engagement rewards',
    'Personalised content',
    'Chat sessions with experts',
  ];

  return (
    <Modal
      isOpen={modalIsOpen}
      className='modal-subsecribe'
      onRequestClose={closeModal}
      overlayClassName='overlay'
    >
      <Div>
        <div className='left-container'>
          <div className='left'>
            <div className='title'>
              <Title title='Subscribe to Premium' />
            </div>
            <p>
              Supporting people with health transitions during their career by
              providing virtual health support, hormone and genetic kits through
              our certified Class I Medical Device App.
            </p>
            <p>
              Contact us, if you want to subscribe to Premium and get more
              useful health data about your employees.
            </p>
            <div className='btn'>
              <Button text='Contact us' link='' />
            </div>
          </div>
          <StaticImage
            src='../../../assets/svgs/Subsecibe.svg'
            className='image'
          />
        </div>
        <div className='right'>
          <div className='mobile-container'>
            <div className='mobile-header'>
              <div className='price'>
                <p>£26.99</p>
                <span>/annual </span>
              </div>
              <p className='free'>7 days free trial. Only £2.25/month</p>
              <p className='premium'>SORA Premium</p>
              <p className='desc'>
                Unlimited analytics, plans and demographic insights. All you
                need to level-up your business.
              </p>
              <span className='line'></span>
            </div>
            <div className='mobile-features'>
              {features.map((feature, index) => {
                return <Feature key={index} featureName={feature} />;
              })}
              <div className='btn'>
                <Button text='Learn more' link='' />
              </div>
            </div>
            <div className='save'>
              <p>Save 46%</p>
            </div>
          </div>
          <button onClick={closeModal} className='close-btn'>
            <AiOutlineClose />
          </button>
          <StaticImage
            src='../../../assets/svgs/scribble1.svg'
            alt='scribble'
            className='scribble'
          />
          <StaticImage
            src='../../../assets/svgs/scribble2.svg'
            alt='scribble'
            className='scribble'
          />
          <StaticImage
            src='../../../assets/svgs/scribble3.svg'
            alt='scribble'
            className='scribble'
          />
          <StaticImage
            src='../../../assets/svgs/scribble4.svg'
            alt='scribble'
            className='scribble'
          />
        </div>
      </Div>
    </Modal>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .right {
    width: 50%;
    height: 100%;
    background-color: #275c61;
    padding-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .mobile-container {
      background-color: #fff;
      width: 60%;
      height: 90%;
      border-radius: 10px;
      filter: drop-shadow(0px 0px 5px #e9e9e9);
      padding: 0.4rem 1rem;
      position: relative;
      .mobile-header {
        display: flex;
        flex-direction: column;
        .price {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          p {
            color: ${(props) => props.theme.colors.primary};
            font-family: 'DM Serif Text', serif;
            font-size: 2.5rem;
            margin: 0;
          }
          span {
            margin: 0 0 0.5rem 0.8rem;
            color: ${(props) => props.theme.colors.emptyBasket};
            font-size: 1rem;
          }
        }
        .free {
          font-family: 'Nunito Sans', sans-serif;
          font-size: 0.8rem;
          color: ${(props) => props.theme.colors.primaryDark};
        }
        .premium {
          font-family: 'DM Serif Text', sans-serif;
          font-size: 1.3rem;
        }
        .desc {
          color: ${(props) => props.theme.colors.lightGray1};
          font-size: 0.78rem;
          text-align: justify;
          width: 95%;
        }
        .line {
          width: 90%;
          height: 1px;
          background-color: ${(props) => props.theme.colors.lightGray};
          margin: 0.5rem 0;
          align-self: center;
        }
      }
      .mobile-features {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        .btn {
          width: 100%;
        }
      }
      .save {
        background-color: ${({ theme: { colors } }) => colors.primary};
        color: ${({ theme: { colors } }) => colors.white};
        padding: 0.6rem;
        position: absolute;
        border-radius: 5px;
        top: -1.2rem;
        right: -2.2rem;
        font-size: 0.8rem;
        font-family: 'Nunito Sans', sans-serif;
        font-weight: bold;
      }
    }
    .close-btn {
      color: #fff;
      border: none;
      background: none;
      cursor: pointer;
      font-size: 1.5rem;
      box-shadow: none;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 10;
    }
    .scribble {
      position: absolute;
      &:nth-child(3) {
        width: 30%;
        top: -1rem;
        left: 0;
      }
      &:nth-child(4) {
        width: 20%;
        top: 16rem;
        left: 0;
      }
      &:nth-child(5) {
        width: 15%;
        top: 12rem;
        right: -0.5rem;
      }
      &:nth-child(6) {
        width: 6%;
        top: 23rem;
        right: 2rem;
      }
    }
  }
  .left-container {
    width: 50%;
    background-color: #fff;
    padding: 2rem 1rem;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .left {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      p:not(:first-child) {
        color: ${({ theme: { colors } }) => colors.lightGray2};
        padding: 0 2rem;
        text-align: justify;
        font-size: 0.85rem;
      }
      .btn {
        width: 50%;
        padding: 0 2rem;
      }
      .title {
        align-self: center;
        margin-top: 0.2rem;
      }
    }
    .image {
      width: 50%;
      height: 40%;
      margin: 2rem;
    }
  }
`;
