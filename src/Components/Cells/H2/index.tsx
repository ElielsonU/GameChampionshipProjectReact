import React, { PropsWithChildren } from "react";
import StyledH2 from "./style";

interface H2Props extends PropsWithChildren {
    color: string;
    fontSize: string;
}

const H2: React.FC<H2Props> = ({
    color,
    fontSize,
    children
}) => (
    <StyledH2 color={color} fontSize={fontSize}>
        {children}
    </StyledH2>
)

export default H2