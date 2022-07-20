import React, { useState } from 'react';
import Modal from 'react-modal';
import Title from '../../auth/LeftPanel/Title';
import Button from '../../auth/Button';
import { StaticImage } from 'gatsby-plugin-image';
import Feature from './Feature';
import { AiOutlineClose } from 'react-icons/ai';
import { LeftStyle, StyledCloseButton } from './styles';
import '../../../css/modal.css';

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
      <LeftStyle>
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
          <StyledCloseButton onClick={closeModal}>
            <StaticImage
              alt='close'
              src='../../../assets/svgs/close.svg'
              width={14}
            />
          </StyledCloseButton>
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
      </LeftStyle>
    </Modal>
  );
}
