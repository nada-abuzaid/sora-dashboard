import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import { addEmployerSchema } from '../../../utils';
import subsecribtionType from '../../../utils/Admin/subsecribe';
import { Form, FormField, SubmitButton } from '../../Common/Form';
import { Container, Row } from './styles';

export default function AddForm({
  type = 'Add',
  editedCompany,
  isOpen,
  setIsOpen,
  setAction,
  action,
}) {
  const [subType, setType] = useState('');

  const closeModal = () => {
    if (type === 'Edit') {
      setAction({ ...action, isEditing: !action.isEditing });
    } else {
      setIsOpen(!isOpen);
    }
  };

  let initialValues = {
    name: '',
    subscriptionType: 'Pick type',
    allowedEmployees: 1,
    coins: 0,
    email: '',
  };

  if (type === 'Edit') {
    initialValues = {
      name: editedCompany.name,
      subscriptionType: subsecribtionType(editedCompany.subscriptionType),
      allowedEmployees: editedCompany.allowedEmployees,
      coins: editedCompany.coins,
      email: editedCompany.email,
    };
  }

  const onChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = async (values) => {
    values.subscriptionType = subType;
  };

  return (
    <Modal
      isOpen={isOpen || action.isEditing}
      className="modal employer-modal"
      onRequestClose={closeModal}
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <Form
        initialValues={initialValues}
        validationSchema={addEmployerSchema}
        onSubmit={handleSubmit}
      >
        <>
          <p className="title">{`${type} employer details`}</p>
          <Container>
            <Row>
              <div className="col">
                <p>Company name*</p>
                <FormField name="name" className="input" />
              </div>
              <div className="col">
                <p>Number of employees allowed</p>
                <FormField name="allowedEmployees" className="input" />
              </div>
            </Row>
            <Row>
              <div className="col">
                <p>Subscription type*</p>
                <FormField
                  as="select"
                  name="subscriptionType"
                  className="input"
                  onChange={onChange}
                >
                  <option value="Select Priority" disabled>
                    Select Priority
                  </option>
                  <option value="1">Lite</option>
                  <option value="2">Premium</option>
                </FormField>
              </div>
              <div className="col">
                <p>Coins bonus*</p>
                <FormField name="coins" className="input" />
              </div>
            </Row>
          </Container>
          <div>
            <p className="label">Employer email addresses*</p>
            <p className="desc">
              If the email addresses are more than one, please put comma to
              separate them.
            </p>
            <FormField name="email" className="input" />
          </div>
          <SubmitButton className="add-btn" title={`+ ${type} employer`} />
        </>
      </Form>
      <button type="button" onClick={closeModal} className="close-btn">
        <AiOutlineClose />
      </button>
    </Modal>
  );
}
