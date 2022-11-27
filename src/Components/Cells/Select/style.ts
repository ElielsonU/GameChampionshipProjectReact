import styled from "styled-components";

interface SelectProps {
    color: string;
    backgroundColor: string;
    padding: string;
}

const StyledSelect = styled.select<SelectProps>`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    padding: ${(props) => props.padding};
    border: none;
    font-size: 22px;
    text-align: center;
    -webkit-appearance: none;
    transition: all 200ms ease-in;
    &:focus { 
        outline: none;
        transform: scale(1.08);
    }
`

export default StyledSelect