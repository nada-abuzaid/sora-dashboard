import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { Form } from '../../components/Form';
import { FormStyle, UpdateButton } from './style';

export default function UserData({
  name, email, setIsEdit, isEdit,
}) {
  const handleSubmit = () => {
    setIsEdit(false);
  };
  const initialValues = {
    name,
    email,
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
              <p>Email</p>
              <Field name="email" placeholder={email} value={email} readOnly />
              <span>*Your can’t change your email because...</span>
            </div>
          </div>
          <div className="second-col">
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
  email: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
  setIsEdit: PropTypes.func.isRequired,
};
