export const AUTH_FORM_KEYS = {
  LOGIN: 'login',
  REGISTER: 'register',
  VERIFY_EMAIL: 'verify-email',
  FORGOT_PASSWORD: 'forgot-password',
  SET_PASSWORD: 'set-password',
};

const authForms = {
  [AUTH_FORM_KEYS.REGISTER]: {
    title: 'Welcome to Syrona Health',
    description: null,
    selectedTab: AUTH_FORM_KEYS.REGISTER,
    inputs: [
      {
        name: 'firstName',
        required: true,
        label: 'First name*',
        type: 'text',
      },
      {
        name: 'lastName',
        required: true,
        label: 'Last name*',
        type: 'text',
      },
      {
        name: 'email',
        required: true,
        label: 'Email*',
        type: 'email',
      },
    ],
    buttonText: 'Register',
  },
  [AUTH_FORM_KEYS.LOGIN]: {
    title: 'Welcome to Syrona Health',
    selectedTab: AUTH_FORM_KEYS.LOGIN,
    description: null,
    inputs: [
      // {
      //   name: "email",
      //   required: true,
      //   label: "Email*",
      //   type: "email"
      // },
      // {
      //   name: "password",
      //   required: true,
      //   label: "Password*",
      //   type: "password"
      // }
    ],
    buttonText: 'Login',
  },
  [AUTH_FORM_KEYS.SET_PASSWORD]: {
    title: 'Set your password',
    description: null,
    selectedTab: null,
    inputs: [
      {
        name: 'password',
        required: true,
        label: 'Password*',
        type: 'password',
      },
      {
        name: 'confirmPassword',
        required: true,
        label: 'Confirm password*',
        type: 'password',
      },
    ],
    buttonText: 'Register',
  },
  [AUTH_FORM_KEYS.VERIFY_EMAIL]: {
    title: 'Verify email',
    description:
      'Please check your email and click on the provided link to verify it.',
    selectedTab: null,
    inputs: [],
    buttonText: 'Continue',
  },
  [AUTH_FORM_KEYS.FORGOT_PASSWORD]: {
    title: 'Forgot password',
    description: 'Please enter your email address and recover your passoword.',
    selectedTab: null,
    inputs: [
      {
        name: 'email',
        required: true,
        label: 'Email*',
        type: 'email',
      },
    ],
    buttonText: 'Recover password',
  },
};

export default authForms;
