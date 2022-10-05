import PropTypes from 'prop-types';
import React from 'react';
import {
  SlideParagraph, SlideTitle, SlideWrapper,
} from '../Dashboard/styles';

export default function Slide({
  image1, title, paragraph,
}) {
  return (
    <SlideWrapper>
      <img src={image1} alt="Popup" className="popup-images" width={180} />
      <SlideTitle>{title}</SlideTitle>
      <SlideParagraph>
        {paragraph}
      </SlideParagraph>
    </SlideWrapper>
  );
}

Slide.propTypes = {
  image1: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
