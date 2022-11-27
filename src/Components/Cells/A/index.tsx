import React, { PropsWithChildren } from "react";
import StyledA from "./style";

interface AProps extends PropsWithChildren {
    color: string;
    href: string;
    fontSize: string;
}

const A: React.FC<AProps> = ({
    color,
    href,
    fontSize,
    children
}) => (
    <StyledA color={color} href={href} target="_blank" fontSize={fontSize}>
        {children}
    </StyledA>
)


export default A
