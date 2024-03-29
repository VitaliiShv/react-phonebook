const fields = {
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'Email',
    placeholder: 'email',
  },
  password: {
    type: 'password',
    name: 'password',
    required: true,
    label: 'Password',
    placeholder: 'password',
    autoComplete: 'current-password',
  },
};

export default fields;
