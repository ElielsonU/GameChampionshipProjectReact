import React, { PropsWithChildren } from "react";
import StyledH1 from "./style";

interface H1Props extends PropsWithChildren {
    color: string;
    backgroundColor: string;
    fontSize: string;
}

const H1: React.FC<H1Props> = ({
    color,
    backgroundColor,
    fontSize,
    children
}) => (
    <StyledH1 color={color} backgroundColor={backgroundColor} fontSize={fontSize}>
        {children}
    </StyledH1>
)

export default H1