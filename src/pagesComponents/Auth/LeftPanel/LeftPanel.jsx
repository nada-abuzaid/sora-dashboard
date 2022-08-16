import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import Title from './Title';
import Button from '../Button';
import { Form, FormField, SubmitButton } from '../../../components';
import { Container, TitleWrapper } from './styles';

export default function LeftSide({ title }) {
  const navigate = useNavigate();
  const url = window.location.search.substring(1);
  return (
    <Container>
      {title === 'Verify email' || url === 'verify-email' ? (
        <TitleWrapper>
          <Title title="Verify email" />
          <p className="desc">
            Please check your email and click on the provided link to verify it.
          </p>
          <Button text="Continue" link="/auth?set-password" />
        </TitleWrapper>
      ) : title === 'Forgot password' || url === 'forgot-password' ? (
        <TitleWrapper>
          <Title title="Forgot password" />
          <p>Please enter your email address and recover your passoword</p>
          <div className="form">
            <Form
              initialValues={{
                email: '',
              }}
              onSubmit={() => {
                navigate('/auth?login');
              }}
            >
              {
                 ({ errors }) => (
                   <>
                     <FormField name="email" placeholder="Email*" errors={errors} />
                     <SubmitButton title="Reset password" />
                   </>
                 )
              }

            </Form>
          </div>
        </TitleWrapper>
      ) : url === 'set-password' ? (
        <>
          <Title title={title} />
          <Tabs />
        </>
      ) : (
        <>
          <Title title={title} />
          <Tabs />
        </>
      )}
    </Container>
  );
}

LeftSide.propTypes = {
  title: PropTypes.string.isRequired,
};
