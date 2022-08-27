import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineEdit, MdUploadFile } from 'react-icons/md';
import Confirmation from '../Confirmation';
import Form from '../Form';
import DragDrop from '../Upload';
import { ActionsWrapper, Icon } from './styles';

export default function Actions({ setDataSource, item }) {
  const [deletedCompany, setDeletedCompany] = useState({});
  const [editedCompany, setEditedCompany] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const [isEditing, setIsEdit] = useState(false);
  const [isUpload, setIsUpload] = useState(false);

  const handleDelete = () => {
    setDataSource((pre) => pre.filter(
      (employer) => employer.uniqueCode !== deletedCompany.uniqueCode,
    ));
  };

  return (
    <>
      {isDelete && (
        <Confirmation handleDelete={handleDelete} setIsDelete={setIsDelete} />
      )}

      {isEditing && (
        <Form type="Edit" editedCompany={editedCompany} setIsEdit={setIsEdit} />
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
            setIsDelete(true);
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
