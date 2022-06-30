import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StaticImage } from 'gatsby-plugin-image';
import Modal from 'react-modal';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import '../css/welcome-carousel.css';
import '../css/modal.css';

function WelcomeCarousel() {
  const [modalIsOpen, setIsOpen] = React.useState(true);
  const  closeModal = () => {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      className="modal"
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="overlay"
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
              <StaticImage
                width={138}
                src={'../assets/svgs/welcome-popup-1-lock.svg'}
                alt="Popup image"
              />
              <StaticImage
                width={175.25}
                src={'../assets/svgs/welcome-popup-1-lock-scribbles.svg'}
                alt="Popup image"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-45%, -65%)',
                  marginBottom: '20px',
                }}
              />
            </ImagesWrapper>
            <SlideTitle>Welcome to Syrona Health Dashboard</SlideTitle>
            <SlideParagraph>
              We wanted to reach to you personally and thank you for choosing
              Syrona Health! <br /> You’ve just logged in our customised web
              dashboard that extracts health data about your employees presented
              through graphs and charts. The visualised information is
              aggregated and completely anonymous.
            </SlideParagraph>
          </SlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideWrapper>
            <ImagesWrapper className="images">
              <StaticImage
                width={138}
                src={'../assets/svgs/welcome-popup-2.svg'}
                alt="Popup image"
              />
              <StaticImage
                width={155.25}
                src={'../assets/svgs/welcome-popup-2-upper-pop.svg'}
                alt="Popup image"
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
              <StaticImage
                width={138}
                src={'../assets/svgs/welcome-popup-1-lock.svg'}
                alt="Popup image"
              />
              <StaticImage
                width={175.25}
                src={'../assets/svgs/welcome-popup-1-lock-scribbles.svg'}
                alt="Popup image"
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
        <StaticImage alt="close" src={'../assets/svgs/close.svg'} width={14} />
      </StyledCloseButton>
    </Modal>
  );
}
const SlideWrapper = styled.div`
  width: 80%;
  height: 80%;
  background-color: ${({ theme: { colors } }) => colors.white};
`;
const SlideTitle = styled.p`
  font-family: 'DM Serif Text';
  font-size: 24px;
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.tablet_portrait}) {
    font-size: 22px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    font-size: 16px;
  }
`;
const SlideParagraph = styled.p`
  text-align: justify;
  font-family: 'NunitoSans';
  margin-bottom: 50px;
  font-size: 16px;
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.tablet_portrait}) {
    margin-bottom: 20px;
    font-size: 14px;
  }
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    font-size: 13px;
    text-align: justify;
  }
`;
const StyledCloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
`;
const ImagesWrapper = styled.div`
  position: relative;
  margin-block: 30px;
`;
export default WelcomeCarousel;