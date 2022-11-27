import React, { PropsWithChildren } from "react";
import H1 from "../../Cells/H1";
import StyledHeader from "./style";

interface HeaderProps extends PropsWithChildren {
    color: string;
    H1backgroundColor: string;
    fontSize: string;
}

const Header:React.FC<HeaderProps> = ({
    H1backgroundColor,
    fontSize,
    color,
    children
}) => (
    <StyledHeader color={color}>
        <H1 backgroundColor={H1backgroundColor} color={color} fontSize={fontSize}>
            {children}
        </H1>
    </StyledHeader>
)

export default Header