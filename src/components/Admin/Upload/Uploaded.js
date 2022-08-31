import React from 'react';
import styled from 'styled-components';
import Docs from '../../../assets/svgs/Docs.svg';
import UploadedImg from '../../../assets/svgs/Uploaded.svg';

export default function UploadedSuccess({ isFile }) {
  return (
    <Uploaded>
      <div className="file-name">
        <div>
          <img src={Docs} alt="document icon" width={20} />
          <p>{isFile.name}</p>
        </div>
        <img src={UploadedImg} alt="success uploaded icon" width={30} />
      </div>
      <Line />
    </Uploaded>
  );
}

const Uploaded = styled.div`
margin-top: 1rem;
.file-name{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  div{
      display: flex;
      flex-direction: row;
      gap: 1rem;
  }
}
`;

const Line = styled.div`
    width: 100%;
    height: 0.5rem;
    margin-top: 1rem;
    border-radius: 6px;
    background-color: ${({ theme: { colors } }) => colors.primary};
`;
