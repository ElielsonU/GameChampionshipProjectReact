import styled from "styled-components";

interface H2Props {
    color: string;
    fontSize: string;
}

const StyledH2 = styled.h2<H2Props>`
    color: ${(props) => props.color};
    border-radius: 10px;
    font-size: ${(props) => props.fontSize};
    margin: 0px;
    font-family: Pridi;
`

export default StyledH2