const validations = {
  name: { isEmpty: true, minLength: 1 },
  email: { isEmpty: true, isEmail: true },
  password: { isEmpty: true, minLength: 8 },
};

export default validations;
