import React, { PropsWithChildren } from "react";
import StyledP from "./style";

interface PProps extends PropsWithChildren {
    backgroundColor: string;
    color: string;
    fontSize: string;
}

const P:React.FC<PProps> = ({
    backgroundColor,
    color,
    fontSize,
    children
}) => (
    <StyledP backgroundColor={backgroundColor} color={color} fontSize={fontSize}>
        {children}
    </StyledP>
)

export default P