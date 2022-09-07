import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineEdit, MdUploadFile } from 'react-icons/md';
import { HiChartBar } from 'react-icons/hi';
import Confirmation from '../Confirmation';
import Form from '../Form';
import DragDrop from '../Upload';
import { ActionsWrapper, Icon } from './styles';

export default function Actions({ setDataSource, item }) {
  const [deletedCompany, setDeletedCompany] = useState({});
  const [editedCompany, setEditedCompany] = useState({});
  const [action, setAction] = useState({
    isEditing: false,
    isDelete: false,
    isUpload: false,
    isView: false,
  });

  const handleDelete = () => {
    setDataSource((pre) => pre.filter(
      (employer) => employer.uniqueCode !== deletedCompany.uniqueCode,
    ));
    setAction({ ...action, isDelete: !action.isDelete });
  };

  return (
    <>
      {action.isDelete && (
        <Confirmation
          handleDelete={handleDelete}
          action={action}
          setAction={setAction}
        />
      )}

      {action.isEditing && (
        <Form type="Edit" editedCompany={editedCompany} action={action} setAction={setAction} />
      )}

      {action.isUpload && <DragDrop setAction={setAction} action={action} />}

      <ActionsWrapper>
        <Icon onClick={() => setAction({ ...action, isView: !action.isView })}>
          <HiChartBar />
        </Icon>
        <Icon
          onClick={() => {
            setEditedCompany(item);
            setAction({ ...action, isEditing: !action.isEditing });
          }}
        >
          <MdOutlineEdit />
        </Icon>
        <Icon
          onClick={() => {
            setDeletedCompany(item);
            setAction({ ...action, isDelete: !action.isDelete });
          }}
        >
          <RiDeleteBinLine />
        </Icon>
        <Icon onClick={() => setAction({ ...action, isUpload: !action.isUpload })}>
          <MdUploadFile />
        </Icon>
      </ActionsWrapper>
    </>
  );
}
