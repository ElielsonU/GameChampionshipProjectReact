import styled from "styled-components";

interface FooterProps {
    color: string;
    backgroundColor?: string;
    fontSize: string;
}

const StyledFooter = styled.footer<FooterProps>`
    width: 100%;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    font-size: ${(props) => props.fontSize};
    text-align: center;
    bottom: 50;
    right: 0;
`

export default StyledFooter