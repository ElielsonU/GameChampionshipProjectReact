import React, { PropsWithChildren }from "react";
import StyledHr from "./style";


interface HrProps {
    height: string
}

const Hr: React.FC<HrProps> = ({
    height
}) => (
    <StyledHr height={height}/>
)

export default Hr