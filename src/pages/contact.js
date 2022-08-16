import React from 'react';
import { useSelector } from 'react-redux';
import { ContactStyle } from '../styles/dashboard';
import subsecibe from '../assets/svgs/Subsecibe.svg';
import Subsecribe from '../pagesComponents/Dashboard/Subsecribe/Subsecribe';
import { Mailto } from '../components';

export default function Contact() {
  const { open } = useSelector((state) => state.upgrade.value);

  return (
    <ContactStyle>
      {
        open && <Subsecribe />
      }
      <p>Have any questions?</p>
      <p className="contact-email">If you have any issues, please contact</p>
      <Mailto email="info@syronahealth.com" className="email">info@syronahealth.com</Mailto>
      <img src={subsecibe} className="image" alt="Subsecibe" />
    </ContactStyle>
  );
}
