import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { Datastyle } from './style';
import UserData from './UserData';
import { Form } from '../../components';

export default function Data({
  name, email, password, isEdit, setIsEdit,
}) {
  return (
    <>
      {
      isEdit ? (
        <UserData
          name={name}
          email={email}
          password={password}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
        />
      ) : (
        <Datastyle>
          <div>
            <p>Name:</p>
            <span>{name}</span>
          </div>
          <div>
            <p>Email:</p>
            <span>{email}</span>
          </div>
          <div className="password">
            <p>Password:</p>
            <Form>
              <Field name="password" placeholder={password} value={password} type="password" readOnly />
            </Form>
          </div>
        </Datastyle>
      )
    }
    </>
  );
}

Data.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
  setIsEdit: PropTypes.func.isRequired,
};
