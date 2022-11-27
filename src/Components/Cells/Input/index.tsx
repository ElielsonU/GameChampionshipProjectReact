import React from "react";
import StyledInput from "./style"

interface InputProps {
    backgroundColor: string;
    color: string;
    placeholder: string;
    type: "text"|"email"|"password";
}

const Input:React.FC<InputProps> = ({
    backgroundColor,
    color,
    placeholder,
    type
}) => (
    <StyledInput backgroundColor={backgroundColor} color={color} placeholder={placeholder} type={type} required/>
)

export default Input