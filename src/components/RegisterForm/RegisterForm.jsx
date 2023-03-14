import TextField from "components/shared/TextField/TextField";
import useForm from "components/shared/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";
import Button from "components/shared/components/Button/Button";

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({initialState, onSubmit});
    const { name, email, password } = state;
    

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={name} handleChange={handleChange} {...fields.name} />
            <TextField value={email} handleChange={handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <Button type="submit">Register</Button>
        </form>
    )
};

export default RegisterForm;