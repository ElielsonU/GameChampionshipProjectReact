import React, { MouseEventHandler, ChangeEventHandler } from "react";
import Div from "../../Cells/Div";
import P from "../../Cells/P";
import H2 from "../../Cells/H2";
import Button from "../../Cells/Button";
import Input from "../../Cells/Input";
import A from "../../Cells/A";
import Select from "../../Cells/Select"
import Option from "../../Cells/Option"

const colors:Array<string> = ["#222831", "#393E46", "#0092CA", "#eee"];

interface ContentBoxProps {
    type: "Let's Play"|"Description";
    LoginOnClick?: MouseEventHandler;
    SignUpOnClick?: MouseEventHandler;
    SelectOnchange?: ChangeEventHandler;
}

const ContentBox:React.FC<ContentBoxProps> = ({
    type,
    LoginOnClick,
    SignUpOnClick,
    SelectOnchange
}) => {
    return  (
        <Div backgroundColor={colors[3]} flexDirection="row" height="415px" width="356px" alignItems="flex-start" borderRadius="15px" fontSize="23px">
            <Div backgroundColor={colors[2]} flexDirection="row" height="70px" width="150%" alignItems="center" borderRadius="0px" fontSize="23px">
                <H2 color={colors[3]}>{type}</H2>
            </Div>
            {type === "Let's Play"?
                <React.Fragment>
                    <Input backgroundColor={colors[1]} color={colors[3]} placeholder="Name" type="text"></Input>
                    <Input backgroundColor={colors[1]} color={colors[3]} placeholder="Email" type="email"></Input>
                    <Input backgroundColor={colors[1]} color={colors[3]} placeholder="password" type="password"></Input>
                    <Select backgroundColor={colors[1]} color={colors[3]} onchange={SelectOnchange} padding="5px 15px">
                        <Option value="">Choose a game</Option>
                        <Option color="silver" value="cs">Counter Strike</Option>
                        <Option color="steelblue" value="valorant">Valorant</Option>
                        <Option color="maroon" value="lol">League of Legends</Option>
                        <Option color="black" value="pubg">PUBG</Option>
                    </Select>
                    <Div alignItems="center" flexDirection="row" height="20%" width="100%">  
                        <Button color={colors[2]} fontSize="30px" onClick={LoginOnClick} padding="5px 20px">Login</Button>
                        <Button backgroundColor={colors[2]} borderColor={colors[2]} color={colors[3]} fontSize="30px" onClick={SignUpOnClick} padding="5px 20px">Sign Up</Button>
                    </Div>
                    <A color={colors[2]} href="" fontSize="15px">I forgot my password</A>
                </React.Fragment>
                : 
                <Div alignItems="center" backgroundColor={colors[1]} borderRadius="20px" flexDirection="row" fontSize="24px" height="330px" width="340px">
                    <P color={colors[3]}>The <strong>ST[O]RM Championship</strong> was made for the gaming comunity, with the purpose of raising and donating money to NGOs that deal with: chronic diseases, abandoned animals, disabled elderly people, etc... Join our community and have fun meeting people and helping to who needs. </P>
                </Div>
            }
         </Div>
    )
}

export default ContentBox