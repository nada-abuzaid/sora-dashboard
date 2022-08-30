import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import Title from '../Auth/LeftPanel/Title';
import Feature from './Feature';
import { LeftStyle, StyledCloseButton } from './styles';
import '../../styles/modal.css';

import close from '../../assets/svgs/close.svg';
import subsecibe from '../../assets/svgs/Subsecibe.svg';
import scribble1 from '../../assets/svgs/scribble1.svg';
import scribble2 from '../../assets/svgs/scribble2.svg';
import scribble3 from '../../assets/svgs/scribble3.svg';
import scribble4 from '../../assets/svgs/scribble4.svg';
import { setPro } from '../../store';
import { Mailto } from '..';

export default function Subsecribe() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
    dispatch(setPro({ open: false }));
  };

  const features = [
    'Health tracking',
    'Health insights',
    'Access to community',
    'New articles each week',
    'Engagement rewards',
    'Personalised content',
    'Chat sessions with experts',
  ].map((feature, index) => ({ id: index, name: feature }));

  const scribblesImages = [scribble1, scribble2, scribble3, scribble4];

  return (
    <Modal
      isOpen={modalIsOpen}
      className="modal-subsecribe"
      onRequestClose={closeModal}
      overlayClassName="overlay"
    >
      <LeftStyle>
        <div className="left-container">
          <div className="left">
            <div className="title">
              <Title title="Subscribe to Premium" />
            </div>
            <p>
              Supporting people with health transitions during their career by
              providing virtual health support, hormone and genetic kits through
              our certified Class I Medical Device App.
            </p>
            <p>
              Contact us on info@syronahealth.com, if you want to subscribe to
              Premium and get more useful health data about your employees.
            </p>
            <div className="btn">
              <Mailto email="info@syronahealth.com" className="email">
                Contact us
              </Mailto>
            </div>
          </div>
          <img src={subsecibe} className="image" alt="Subsecibe" />
          <StyledCloseButton onClick={closeModal}>
            <img alt="close" src={close} width={14} />
          </StyledCloseButton>
        </div>
        <div className="right">
          <div className="mobile-container">
            <div className="mobile-header">
              <p className="premium">SORA Premium</p>
              <p className="desc">
                Unlimited analytics, plans and demographic insights. All you
                need to level-up your business.
              </p>
              <span className="line" />
            </div>
            <div className="mobile-features">
              {features.map(({ name, id }) => (
                <Feature key={id} featureName={name} />
              ))}
            </div>
          </div>
          <button type="button" onClick={closeModal} className="close-btn">
            <AiOutlineClose />
          </button>
          {scribblesImages.map((image, index) => (
            <img src={image} alt="scribble" className="scribble" key={index} />
          ))}
        </div>
      </LeftStyle>
    </Modal>
  );
}
