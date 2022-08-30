import PropTypes from 'prop-types';
import React from 'react';
import {
  ImagesWrapper, SlideParagraph, SlideTitle, SlideWrapper,
} from '../Dashboard/styles';

export default function Slide({
  image1, image2, title, paragraph,
}) {
  const images = [
    image1,
    image2,
  ];

  return (
    <SlideWrapper>
      <ImagesWrapper className="images">
        {
          images.map((item, index) => <img src={item} alt="Popup" className={`popup${index + 1}`} key={index} />)
        }
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
