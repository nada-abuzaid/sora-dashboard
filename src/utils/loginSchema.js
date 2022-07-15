import * as Yup from 'yup';

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Wrong Password')
    .required('Password is required'),
});

export default loginSchema;
