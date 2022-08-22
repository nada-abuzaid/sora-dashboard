import { Input } from 'antd';
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

export default function Form() {
  const [modalIsOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      className="modal employer-modal"
      onRequestClose={closeModal}
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <p className="title">Add employer details</p>
      <Container>
        <Row>
          <div className="col">
            <p>Company name*</p>
            <Input />
          </div>
          <div className="col">
            <p>Number of employees allowed</p>
            <Input />
          </div>
        </Row>
        <Row>
          <div className="col">
            <p>Subscription type*</p>
            <Input />
          </div>
          <div className="col">
            <p>Coins bonus*</p>
            <Input />
          </div>
        </Row>
      </Container>
      <div>
        <p className="label">Employer email addresses</p>
        <p className="desc">
          If the email addresses are more than one, please put comma to
          separate them.
        </p>
        <Input className="emails" />
      </div>
      <button className="add-btn" type="button">+ Add employer</button>
    </Modal>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  .col{
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
    p{
        font-size: 1.2rem;
    }
    input{
        max-height: 100%;
        max-width: 90%;
        padding: 0.8rem;
    }
  }
`;
