import React, { PropsWithChildren } from "react";
import StyledDiv from "./style"

interface DivProps extends PropsWithChildren {
    backgroundColor?: string;
    width?: string;
    height?: string;
    flexDirection: "row"|"column";
    alignItems?: string;
    borderRadius?: string;
    fontSize?: string;
    id?: string;
}


const Div: React.FC<DivProps> = ({
    backgroundColor,
    width,
    height,
    flexDirection,
    alignItems,
    borderRadius,
    fontSize,
    id,
    children
}) => (
    <StyledDiv backgroundColor={backgroundColor} width={width} height={height} flexDirection={flexDirection} alignItems={alignItems} borderRadius={borderRadius} fontSize={fontSize} id={id}>
        {children}
    </StyledDiv>
)

export default Div