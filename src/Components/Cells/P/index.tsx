import React, { PropsWithChildren } from "react";
import StyledP from "./style";

interface PProps extends PropsWithChildren {
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    padding?: string;
}

const P:React.FC<PProps> = ({
    backgroundColor,
    color,
    fontSize,
    padding,
    children
}) => (
    <StyledP backgroundColor={backgroundColor} color={color} fontSize={fontSize} padding={padding}>
        {children}
    </StyledP>
)

export default P