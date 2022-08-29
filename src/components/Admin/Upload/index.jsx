import React from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import useUpload from '../../../hooks/useUpload';
import handler from './handler';
import {
  P, Desc, Submit, Div,
} from './styles';

function DragDrop({ setIsUpload }) {
  const [modalIsOpen, isFile, handleChange, closeModal] = useUpload({
    setIsUpload,
  });
  return (
    <Modal
      isOpen={modalIsOpen}
      className="modal upload-files"
      onRequestClose={closeModal}
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <P>Upload CSV File - Benefex*</P>
      <Desc>
        The file should provide first name, last name and email address of each
        employee.
      </Desc>
      <FileUploader
        handleChange={handleChange}
        name="file"
        maxSize={50}
        label="Browse or Drag and drop CSV file"
      />
      <button type="button" onClick={closeModal} className="close-btn">
        <AiOutlineClose />
      </button>
      <Div>
        <Submit
          className="submit-btn"
          onClick={(e) => {
            handler(isFile, e);
          }}
        >
          Invite Employers
        </Submit>
      </Div>
    </Modal>
  );
}

export default DragDrop;
