import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';

import Content from './Content';
import handler from './handler';
import {
  P, Desc, Submit, Div,
} from './styles';
import UploadedSuccess from './Uploaded';

function DragDrop({ setAction, action }) {
  const [isFile, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  const closeModal = () => {
    setFile(null);
    setAction({ ...action, isUpload: !action.isUpload });
  };

  return (
    <Modal
      isOpen={action.isUpload}
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
      {
        isFile ? (
          <UploadedSuccess isFile={isFile} />
        ) : (
          <FileUploader
            handleChange={handleChange}
            maxSize={50}
            label="Browse or Drag and drop CSV file"
            multiple={false}
            types={['csv']}
          >
            <Content />
          </FileUploader>
        )
      }
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
