import PropTypes from 'prop-types';
import React from 'react';
import {
  ImagesWrapper, SlideParagraph, SlideTitle, SlideWrapper,
} from '../styles';

export default function Slide({
  image1, image2, title, paragraph,
}) {
  return (
    <SlideWrapper>
      <ImagesWrapper className="images">
        <img src={image1} alt="Popup" className="popup1" />
        <img src={image2} alt="Popup" className="popup2" />
      </ImagesWrapper>
      <SlideTitle>{title}</SlideTitle>
      <SlideParagraph>
        {paragraph}
      </SlideParagraph>
    </SlideWrapper>
  );
}

Slide.propTypes = {
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
