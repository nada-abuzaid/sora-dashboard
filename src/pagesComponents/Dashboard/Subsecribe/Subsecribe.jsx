import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Title from '../../Auth/LeftPanel/Title';
import Feature from './Feature';
import { LeftStyle, StyledCloseButton } from './styles';
import '../../../styles/modal.css';

import subsecibe from '../../../assets/svgs/Subsecibe.svg';
import scribble1 from '../../../assets/svgs/scribble1.svg';
import scribble2 from '../../../assets/svgs/scribble2.svg';
import scribble3 from '../../../assets/svgs/scribble3.svg';
import scribble4 from '../../../assets/svgs/scribble4.svg';
import { setPro } from '../../../state/upgrade';

export default function Subsecribe() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
              Contact us, if you want to subscribe to Premium and get more
              useful health data about your employees.
            </p>
            <div className="btn">
              <button
                type="button"
                onClick={() => {
                  closeModal();
                  dispatch(setPro({ open: false }));
                  navigate('/contact');
                }}
              >
                Contact us
              </button>
            </div>
          </div>
          <img src={subsecibe} className="image" alt="Subsecibe" />
          <StyledCloseButton onClick={closeModal}>
            <img alt="close" src="../../../assets/svgs/close.svg" width={14} />
          </StyledCloseButton>
        </div>
        <div className="right">
          <div className="mobile-container">
            <div className="mobile-header">
              <div className="price">
                <p>£26.99</p>
                <span>/annual </span>
              </div>
              <p className="free">7 days free trial. Only £2.25/month</p>
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
            <div className="save">
              <p>Save 46%</p>
            </div>
          </div>
          <button type="button" onClick={closeModal} className="close-btn">
            <AiOutlineClose />
          </button>
          <img src={scribble1} alt="scribble" className="scribble" />
          <img src={scribble2} alt="scribble" className="scribble" />
          <img src={scribble3} alt="scribble" className="scribble" />
          <img src={scribble4} alt="scribble" className="scribble" />
        </div>
      </LeftStyle>
    </Modal>
  );
}
