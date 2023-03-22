import styled from "styled-components";

interface DivProps {
    backgroundColor?: string;
    flexDirection: "row"|"column";
    width?: string;
    height?: string;
    alignItems?: string;
    borderRadius?: string;
    fontSize?: string;
}

const StyledDiv = styled.div<DivProps>`
    display: flex;
    border: 20px;
    border-radius: ${(props) => props.borderRadius};
    overflow: hidden;
    background-color: ${(props) => props.backgroundColor};
    font-size: ${(props) => props.fontSize};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    flex-direction: ${(props) => props.flexDirection};
    align-items: ${(props) => props.alignItems};
    flex-wrap: wrap;
    justify-content: space-around;
`

export default StyledDiv