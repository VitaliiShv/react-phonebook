import { useMemo } from "react";
import { nanoid } from "nanoid";


const TextField = ({ label, handleChange, ...props }) => {
    const id = useMemo(() => nanoid(), []);


    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} onChange={handleChange} {...props}></input>
        </div>
    )
}

export default TextField;