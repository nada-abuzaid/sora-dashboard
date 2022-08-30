import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineEdit, MdUploadFile } from 'react-icons/md';
import Confirmation from '../Confirmation';
import Form from '../Form';
import DragDrop from '../Upload';
import { ActionsWrapper, Icon } from './styles';
import useModal from '../../../hooks/useModal';

export default function Actions({ setDataSource, item }) {
  const [deletedCompany, setDeletedCompany] = useState({});
  const [editedCompany, setEditedCompany] = useState({});
  const [isEditing, setIsEdit] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [closeModal, setIsDelete, isDelete] = useModal();

  const handleDelete = () => {
    setDataSource((pre) => pre.filter(
      (employer) => employer.uniqueCode !== deletedCompany.uniqueCode,
    ));
    closeModal();
  };

  return (
    <>
      {isDelete && (
        <Confirmation
          handleDelete={handleDelete}
          closeModal={closeModal}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
        />
      )}

      {isEditing && (
        <Form type="Edit" editedCompany={editedCompany} setIsEdit={setIsEdit} isEdit={isEditing} />
      )}

      {isUpload && <DragDrop setIsUpload={setIsUpload} />}
      <ActionsWrapper>
        <Icon
          onClick={() => {
            setEditedCompany(item);
            setIsEdit(!isEditing);
          }}
        >
          <MdOutlineEdit />
        </Icon>
        <Icon
          onClick={() => {
            setDeletedCompany(item);
            setIsDelete(!isDelete);
          }}
        >
          <RiDeleteBinLine />
        </Icon>
        <Icon onClick={() => setIsUpload(true)}>
          <MdUploadFile />
        </Icon>
      </ActionsWrapper>
    </>
  );
}
