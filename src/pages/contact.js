import React from 'react';
import { ContactStyle } from '../styles/dashboard';
import subsecibe from '../assets/svgs/Subsecibe.svg';

export default function Contact() {
  return (
    <ContactStyle>
      <p>Have any questions?</p>
      <p className="contact-email">If you have any issues, please contact</p>
      <span className="email">info@syronahealth.com</span>
      <img src={subsecibe} className="image" alt="Subsecibe" />
    </ContactStyle>
  );
}
