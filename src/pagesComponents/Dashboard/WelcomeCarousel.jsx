/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from 'react-modal';
import {
  SlideWrapper,
  SlideTitle,
  StyledCloseButton,
  SlideParagraph,
  ImagesWrapper,
} from './styles';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import '../../styles/welcome-carousel.css';
import '../../styles/modal.css';

import popup1 from '../../assets/svgs/welcome-popup-1-lock.svg';
import popup2 from '../../assets/svgs/welcome-popup-1-lock-scribbles.svg';
import close from '../../assets/svgs/close.svg';
import popup3 from '../../assets/svgs/welcome-popup-2.svg';
import popup4 from '../../assets/svgs/welcome-popup-2-upper-pop.svg';

export default function WelcomeCarousel() {
  const [modalIsOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      className="modal"
      onRequestClose={closeModal}
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <SlideWrapper>
            <ImagesWrapper className="images">
              <img
                src={popup1}
                alt="Popup"
                className="popup1"
              />
              <img
                src={popup2}
                alt="Popup"
                className="popup2"
              />
            </ImagesWrapper>
            <SlideTitle>Welcome to Syrona Health Dashboard</SlideTitle>
            <SlideParagraph>
              We wanted to reach to you personally and thank you for choosing
              Syrona Health!
              <br />
              You’ve just logged in our customised web
              dashboard that extracts health data about your employees presented
              through graphs and charts. The visualised information is
              aggregated and completely anonymous.
            </SlideParagraph>
          </SlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideWrapper>
            <ImagesWrapper className="images">
              <img
                src={popup3}
                alt="Popup"
              />
              <img
                src={popup4}
                alt="Popup"
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '50%',
                  transform: 'translate(-0%, -80%)',
                  marginBottom: '20px',
                }}
              />
            </ImagesWrapper>
            <SlideTitle>What you will find</SlideTitle>
            <SlideParagraph>
              You can find information on your employees that currently use the
              app, their health interests, top used app features, how much coins
              they have earned and what they used them for. Furthermore, you can
              check what health conditions they have indicated having and use
              Syrona’s services to support them.
            </SlideParagraph>
          </SlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideWrapper>
            <ImagesWrapper className="images">
              <img
                src={popup1}
                alt="Popup"
              />
              <img
                src={popup2}
                alt="Popup"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-45%, -65%)',
                }}
              />
            </ImagesWrapper>
            <SlideTitle>Guidance to Use</SlideTitle>
            <SlideParagraph>
              Last but not least, if you want to read more information on the
              graphs, just simply hover on the specific graphic element.
            </SlideParagraph>
          </SlideWrapper>
        </SwiperSlide>
      </Swiper>
      <StyledCloseButton onClick={closeModal}>
        <img
          alt="close"
          src={close}
          width={14}
        />
      </StyledCloseButton>
    </Modal>
  );
}
