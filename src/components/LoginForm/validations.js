const validations = {
  email: { isEmpty: true, isEmail: true },
  password: { isEmpty: true, minLength: 8 },
};

export default validations;
