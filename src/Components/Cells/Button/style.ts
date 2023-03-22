import styled from "styled-components";

interface ContainerProps {
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    padding?: string
    fontSize?: string;
}

const StyledButton = styled.button<ContainerProps>`
    background-color: ${(props) => props.backgroundColor};
    border: 4px solid ${(props) => props.borderColor};
    border-radius: 20px;
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    font-family: 'Roboto';
    font-weight: 800;
    padding: ${(props) => props.padding};
    transition: all .1s ease-in;
    &:hover {
        box-shadow: 0px 0px 5px 1px ${(props) => props.borderColor?props.borderColor:props.color};
    }
    &:active {
        box-shadow: none;
    }
`;

export default StyledButton