import styled from "styled-components";

interface H1Props {
    color: string;
    backgroundColor: string;
    fontSize: string;
}

const StyledH1 = styled.h1<H1Props>`
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    border-radius: 10px;
    font-size: ${(props) => props.fontSize};
    display: inline;
    padding: 0px 20px;
    font-family: Pridi;
    @media (max-width: 404px) {
        font-size: 120%;
    }
`

export default StyledH1