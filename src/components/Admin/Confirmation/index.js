import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import { P, Button, Actions } from './styles';
import ConfirmationImg from '../../../assets/svgs/Confirmation.svg';
import useModal from '../../../hooks/useModal';

export default function Confirmation({ handleDelete, setIsDelete }) {
  const [modalIsOpen, setIsOpen, closeModal] = useModal(setIsDelete);
  return (
    <Modal
      isOpen={modalIsOpen}
      className="modal delete-modal"
      onRequestClose={closeModal}
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <img src={ConfirmationImg} alt="employer" width={180} />
      <P>Are you sure you want to delete this employers profile?</P>
      <Actions>
        <Button
          onClick={() => {
            handleDelete();
            setIsOpen(false);
          }}
        >
          Yes, Delete
        </Button>
        <Button onClick={closeModal}>No, Keep it</Button>
      </Actions>
      <button type="button" onClick={closeModal} className="closeModal-btn">
        <AiOutlineClose />
      </button>
    </Modal>
  );
}
