import React, { PropsWithChildren } from "react";
import StyledOption from "./style";


interface OptionProps extends PropsWithChildren{
    color: string;
    backgroundColor: string;
    value: string;
}

const Option: React.FC<OptionProps> = ({
    backgroundColor,
    color,
    value,
    children
}) => (
    <StyledOption backgroundColor={backgroundColor} color={color} value={value}>
        {children}
    </StyledOption>
)

export default Option