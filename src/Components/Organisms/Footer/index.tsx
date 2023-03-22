import React, { PropsWithChildren } from "react";
import P from "../../Cells/P"
import A from "../../Cells/A"
import StyledFooter from "./style"

interface FooterProps extends PropsWithChildren{
    color: string;
    backgroundColor?: string;
    fontSize: string;
    href: string;
    Atext: string;
}

const Footer: React.FC<FooterProps> = ({
    Atext,
    backgroundColor,
    color,
    fontSize,
    href,
    children
}) => (
    <StyledFooter backgroundColor={backgroundColor} color={color} fontSize={fontSize}>
        <P padding="20px 0px 0px 0px">
            {children} <A color={color} href={href}>{Atext}</A>
        </P>
    </StyledFooter>
)

export default Footer