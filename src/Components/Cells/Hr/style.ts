import styled from "styled-components";

interface HrProps {
    height: string
}

const StyledHr = styled.hr<HrProps>`
    background-color: transparent;
    border: none;
    height: ${(props) => props.height};
`

export default StyledHr