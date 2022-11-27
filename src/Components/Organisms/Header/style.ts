import styled from "styled-components";

interface HeaderProps {
    color: string;
}

const StyledHeader = styled.header<HeaderProps>`
    display: flex;
    justify-content: center;
    color: ${(props) => props.color};
    width: 100%;
`

export default StyledHeader