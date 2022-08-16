import React from 'react';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import PropTypes from 'prop-types';

export default function AccountHeader({ setIsEdit, isEdit }) {
  return (
    <div className="head">
      <p>{isEdit ? 'Edit Profile Information' : 'Profile Information'}</p>
      {
        !isEdit && (
        <button type="button" className="edit-icon" onClick={() => setIsEdit(!isEdit)}>
          <MdOutlineModeEditOutline />
        </button>
        )
      }
    </div>
  );
}

AccountHeader.propTypes = {
  setIsEdit: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
};
