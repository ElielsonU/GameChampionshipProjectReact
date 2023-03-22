import React, { PropsWithChildren, MouseEventHandler } from "react";
import StyledButton from "./style"

interface ButtonProps extends PropsWithChildren {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    fontSize?: string;
    padding?: string;
    onClick?: MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({
    color,
    backgroundColor,
    borderColor,
    fontSize,
    padding,
    onClick,
    children
}) => (
    <StyledButton backgroundColor={backgroundColor} color={color} padding={padding} fontSize={fontSize} borderColor={borderColor} onClick={onClick}>
        {children}
    </StyledButton>
)


export default Button
