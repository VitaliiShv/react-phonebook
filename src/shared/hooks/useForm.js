import { useState } from "react";

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return { state, setState, handleChange, handleSubmit };
};

export default useForm;
