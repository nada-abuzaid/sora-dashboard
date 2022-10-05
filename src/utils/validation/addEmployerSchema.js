import * as Yup from 'yup';

const addEmployerSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  subscriptionType: Yup.string().required('Subscription type is required'),
  allowedEmployees: Yup.number().optional(),
  coins: Yup.number().required('Coins are required'),
  email: Yup.string().required('Email is required'),
});

export default addEmployerSchema;
