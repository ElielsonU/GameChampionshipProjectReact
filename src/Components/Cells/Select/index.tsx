import React, { PropsWithChildren, ChangeEventHandler } from "react";
import StyledSelect from "./style";

interface SelectProps extends PropsWithChildren {
    color?: string;
    backgroundColor?: string;
    padding?: string;
    onchange?: ChangeEventHandler;
}

const Select:React.FC<SelectProps> = ({
    color,
    backgroundColor,
    padding,
    onchange,
    children
}) => (
    <StyledSelect color={color} backgroundColor={backgroundColor} padding={padding} onChange={onchange}>
        {children}
    </StyledSelect>
)

export default Select