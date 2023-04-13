import { useState } from "react";

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // switch (name) {
    //   case "name":
    //     if (value.length < 1) {
    //       setState((prevState) => {
    //         return { ...prevState, isNameValid: false };
    //       });

    //       break;
    //     }

    //   case "email":
    //     if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/.test(value)) {
    //       setState((prevState) => {
    //         return { ...prevState, isEmailValid: false };
    //       });
    //       break;
    //     }

    //   case "password":
    //     if (!/^[a-zA-Z]\w{6,}$/.test(value)) {
    //       setState((prevState) => {
    //         return { ...prevState, isPasswordValid: false };
    //       });
    //       break;
    //     }

    //   default:
    //     break;
    // }

    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return {
    state,
    setState,
    handleChange,
    handleSubmit,
  };
};

export default useForm;

// switch (name) {
//   case "name":
//     if (name.length < 1) {
//       state.isNameValid = false;
//     }
//     break;
//   case "email":
//     if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/.test(value)) {
//       state.isEmailValid = false;
//     }
//     state.isEmailValid = true;
//     break;
//   case "password":
//     if (!/^[a-zA-Z]\w{6,}$/.test(value)) {
//       state.isPasswordValid = false;
//     }
//     break;
// }

// switch (name) {
//   case "name":
//     if (value.length < 1) {
//       isNameValid = false;
//       break;
//     }
//     isNameValid = true;
//     break;
//   case "email":
//     if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/.test(value)) {
//       isEmailValid = false;
//       break;
//     }
//     isEmailValid = true;
//     break;
//   case "password":
//     if (!/^[a-zA-Z]\w{6,}$/.test(value)) {
//       isPasswordValid = false;
//       break;
//     }
//     isPasswordValid = true;
//     break;

//   default:
//     break;
// }
