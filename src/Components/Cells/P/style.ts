import styled from "styled-components";

interface PProps {
    backgroundColor: string;
    color: string;
    fontSize: string;
}

const StyledP = styled.p<PProps>`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    font-size: ${props => props.fontSize};
    display: inline-block;
    padding: 2% 1%;
    word-wrap: break-word;
    width: 95%;
    margin: 0px;
`
export default StyledP