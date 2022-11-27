import styled from "styled-components";

interface InputProps {
    backgroundColor: string;
    color: string;
}

const StyledInput = styled.input<InputProps>`
    border: none;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    transition: all 150ms ease-in;
    font-size: 100%;
    padding: 1% 2%;
    &::placeholder { color: ${(props) => props.color}; }
    &:focus { outline: none; }
    &:hover { font-size: 105%; }
`

export default StyledInput