import * as Yup from 'yup';

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().matches(/^(?=.*[@$!%*#?&]).{8,}/, 'Your password must contain at least 8 characters and 1 special character.')
    .required('Password is required'),
});

export default loginSchema;
