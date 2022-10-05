import React from 'react';
import PropTypes from 'prop-types';
import Edit from '../../assets/svgs/Edit.svg';

export default function AccountHeader({ setIsEdit, isEdit }) {
  return (
    <div className="head">
      <p className="head-title">{isEdit ? 'Edit Profile Information' : 'Profile Information'}</p>
      {
        !isEdit && (
          <button type="button" className="edit-icon" onClick={() => setIsEdit(!isEdit)}>
            <img src={Edit} alt="edit-icon" />
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
