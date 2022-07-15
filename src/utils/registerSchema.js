import * as Yup from 'yup';

const registerSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'length must be more than 2 characters')
    .max(20, 'length must be at most 20 characters')
    .required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default registerSchema;
