import React from 'react';
import { ContactStyle } from '../styles/dashboard';
import subsecibe from '../assets/svgs/Subsecibe.svg';
import { Mailto } from '../components';

export default function Contact() {
  return (
    <ContactStyle>
      <p>Have any questions?</p>
      <p className="contact-email">If you have any issues, please contact</p>
      <Mailto email="info@syronahealth.com" className="email">info@syronahealth.com</Mailto>
      <img src={subsecibe} className="image" alt="Subsecibe" />
    </ContactStyle>
  );
}
