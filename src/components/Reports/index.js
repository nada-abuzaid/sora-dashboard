import React from 'react';
import DownloadOne from '../../assets/svgs/DownloadOne.svg';
import { ReportStyle } from './style';

export default function Report() {
  return (
    <ReportStyle>
      <p>Benefex</p>
      <p>January 2022 - April 2022</p>
      <img src={DownloadOne} alt="DownloadOne.svg" />
    </ReportStyle>
  );
}
