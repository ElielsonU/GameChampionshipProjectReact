import styled from "styled-components";

interface ContainerProps {
    color: string;
    fontSize: string;
}

const StyledA = styled.a<ContainerProps>`
    color: ${(props) => props.color};
    transition: all .2s ease-in-out;
    font-weight: 600;
    font-size: ${(props) => props.fontSize};
    &:hover {
        text-shadow: 2px 2px 2px;
        text-decoration: underline;
        font-size: ${(props) => Number(props.fontSize.replace("px", "")) + 2 +  "px"};
        &:active {
            text-shadow: 1px 1px 2px;
        }
    }
`

export default StyledA
