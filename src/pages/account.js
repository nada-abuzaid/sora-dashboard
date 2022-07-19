import React from 'react';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import styled from 'styled-components';
import { DashboardLayout } from '../components';

export default function Account() {
  return (
    <DashboardLayout>
      <Div>
        <div className='head'>
          <p>Profile Information</p>
          <button className='edit-icon'>
            <MdOutlineModeEditOutline />
          </button>
        </div>
      </Div>
    </DashboardLayout>
  );
}

const Div = styled.div`
  box-shadow: 1px 1px 4px 2px #e1e1e1;
  width: 90%;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  height: 100%;
  max-height: 100%;
  background-color: ${({ theme: { colors } }) => colors.white};
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-family: 'DM Serif Text', serif;
        font-size: 1.2rem;
    }
    .edit-icon {
        background: none;
        border: none;
        font-size: 1.5rem;
        color: ${({ theme: { colors } }) => colors.lightGray1};
        cursor: pointer;
    }
  }
`;
