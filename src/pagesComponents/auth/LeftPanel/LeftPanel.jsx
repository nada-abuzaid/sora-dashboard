import React from 'react';
import Tabs from './Tabs';
import Title from './Title';
import Button from '../Button';
import { Form, FormField, SubmitButton } from '../../../components/Form';
import { navigate } from 'gatsby';
import {Container, TitleWrapper} from './styles';

export default function LeftSide({ title }) {
  const url = window.location.search.substring(1);
  return (
    <Container>
      {title === 'verify-email' || url === 'verify-email' ? (
        <TitleWrapper>
          <Title title={title} />
          <p className='desc'>
            Please check your email and click on the provided link to verify it.
          </p>
          <Button text='Continue' link='/auth?set-password' />
        </TitleWrapper>
      ) : title === 'Forgot password' || url === 'forgot-password' ? (
        <TitleWrapper>
          <Title title={title} />
          <p>Please enter your email address and recover your passoword</p>
          <div className='form'>
            <Form
              initialValues={{
                email: '',
              }}
              onSubmit={() => {
                navigate('/auth?login');
              }}
            >
              <FormField name='email' placeholder='Email*' />
              <SubmitButton title='Reset password' />
            </Form>
          </div>
        </TitleWrapper>
      ) : (
        <>
          <Title title={title} />
          <Tabs />
        </>
      )}
    </Container>
  );
}
