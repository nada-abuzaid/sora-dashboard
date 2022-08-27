import { Input } from 'antd';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import styled from 'styled-components';
import subsecribtionType from '../../utils/subsecribe';

export default function Form({ type = 'Add', editedCompany, setIsEdit }) {
  const [modalIsOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
    setIsEdit(false);
  };

  let name = '';
  let subType = '';
  let allowed = '';
  let coins = '';
  let email = '';

  if (type === 'Edit') {
    name = editedCompany.name;
    subType = subsecribtionType(editedCompany.subscriptionType);
    allowed = editedCompany.allowedEmployees;
    coins = editedCompany.coins;
    email = editedCompany.emails;
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      className="modal employer-modal"
      onRequestClose={closeModal}
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <p className="title">{`${type} employer details`}</p>
      <Container>
        <Row>
          <div className="col">
            <p>Company name*</p>
            <Input defaultValue={name} />
          </div>
          <div className="col">
            <p>Number of employees allowed</p>
            <Input defaultValue={allowed} />
          </div>
        </Row>
        <Row>
          <div className="col">
            <p>Subscription type*</p>
            <Input defaultValue={subType} />
          </div>
          <div className="col">
            <p>Coins bonus*</p>
            <Input defaultValue={coins} />
          </div>
        </Row>
      </Container>
      <div>
        <p className="label">Employer email addresses</p>
        <p className="desc">
          If the email addresses are more than one, please put comma to
          separate them.
        </p>
        <Input className="emails" defaultValue={email} />
      </div>
      <button className="add-btn" type="button" onClick={closeModal}>{`+ ${type} employer`}</button>
      <button type="button" onClick={closeModal} className="close-btn">
        <AiOutlineClose />
      </button>
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
  width:100%;
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
