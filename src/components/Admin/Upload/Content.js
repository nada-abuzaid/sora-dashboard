import React from 'react';
import styled from 'styled-components';
import Upload from '../../../assets/svgs/Upload.svg';

export default function Content() {
  return (
    <UploadContent>
      <img src={Upload} alt="upload icon" width={30} />
      <div>
        Drag and drop CSV file, or
        <span> Browse</span>
      </div>
      <p>File max size 50 MB</p>
    </UploadContent>
  );
}

const UploadContent = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-family: 'Nunito Sans', sans-serif;
 gap: 0.2rem;
 padding: 2rem;
 div {
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1rem;
  span{
    color: #1C44D2;
    text-decoration: underline;
  }
 }
 p{
  color: #979797;
  font-size: 1rem;
 }
`;
