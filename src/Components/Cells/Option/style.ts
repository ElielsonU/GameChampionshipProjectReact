import styled from "styled-components";

interface OptionProps {
    color: string;
    backgroundColor: string;
}

const StyledOption = styled.option<OptionProps>`
    font-size: 100%;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    border-radius: none;
`

export default StyledOption