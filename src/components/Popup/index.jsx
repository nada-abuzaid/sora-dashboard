import React, { useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from 'react-modal';
import { StyledCloseButton } from '../Dashboard/styles';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import '../../styles/welcome-carousel.css';
import '../../styles/modal.css';

// import popup1 from '../../assets/svgs/welcome-popup-1-lock.svg';
import close from '../../assets/svgs/close.svg';
// import popup3 from '../../assets/svgs/welcome-popup-2.svg';
import Slide from './Slide';

import popup1 from '../../assets/svgs/welcome1.svg';
import popup2 from '../../assets/svgs/welcome2.svg';

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
          <Slide
            image1={popup1}
            title="Welcome to Syrona Health Dashboard"
            paragraph={`We wanted to reach to you personally and thank you for choosing Syrona Health!
            You’ve just logged in our customised web dashboard that extracts
            health data about your employees presented through graphs and
            charts. The visualised information is aggregated and completely anonymous.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image1={popup2}
            title="What you will find"
            paragraph="You can find information on your employees that currently use the app, their health interests, top used app features, how much coins they have earned and what they used them for. Furthermore, you can check what health conditions they have indicated having and use Syrona’s services to support them."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image1={popup1}
            title="Guidance to Use"
            paragraph="Last but not least, if you want to read more information on the graphs, just simply hover on the specific graphic element."
          />
        </SwiperSlide>
      </Swiper>
      <StyledCloseButton onClick={closeModal}>
        <img alt="close" src={close} width={14} />
      </StyledCloseButton>
    </Modal>
  );
}
