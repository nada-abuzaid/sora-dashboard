import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { Form } from '..';
import { FormStyle, UpdateButton } from './style';

export default function UserData({
  name, setIsEdit, isEdit,
}) {
  const handleSubmit = () => {
    setIsEdit(false);
  };
  const initialValues = {
    name,
    oldPassword: '',
    newPassword: '',
  };
  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <>
        <FormStyle>
          <div className="first-col">
            <div>
              <p>Name</p>
              <Field name="name" placeholder="Name" value={name} />
            </div>
            <div>
              <p>Old Password</p>
              <Field name="oldPassword" placeholder="Old password" type="password" />
            </div>
            <div>
              <p>New Password</p>
              <Field name="newPassword" placeholder="New password" type="password" />
            </div>
          </div>
        </FormStyle>
        <UpdateButton type="button" onClick={() => setIsEdit(!isEdit)}>Update</UpdateButton>
      </>
    </Form>
  );
}

UserData.propTypes = {
  name: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
  setIsEdit: PropTypes.func.isRequired,
};
