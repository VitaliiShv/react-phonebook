import TextField from "shared/components/TextField/TextField";
import useForm from "shared/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";
import Button from "shared/components/Button/Button";

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({initialState, onSubmit});
    const {email, password } = state;
    

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={email} handleChange={handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <Button type="submit">Login</Button>
        </form>
    )
};

export default LoginForm;