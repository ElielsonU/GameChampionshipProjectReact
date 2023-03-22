import React from "react";
import Header from "../../Components/Organisms/Header";
import Footer from "../../Components/Organisms/Footer";
import ContentBox from "../../Components/Organisms/ContentBox";
import Div from "../../Components/Cells/Div";
import P from "../../Components/Cells/P"
import { Navigate } from "react-router-dom"

const Home:React.FC = () => {
    const [Navigator, SetNavigator] = React.useState(<p></p>);

    function LoginButtonEvent(e: React.MouseEvent) {
        const inputs = document.querySelectorAll("input")
        const select = document.querySelector("select")
        
        if (inputs[0].value && inputs[1].value.includes("@gmail.com") && inputs[2].value.length >= 8 && select?.value) {
            SetNavigator(<Navigate to={"/Autenticated"}/>)
        }

        else {
            SetNavigator(
                <P color="#eee" padding="0"> Invalid values! </P>
            )
        }
    }

    function SignUpButtonEvent(e: React.MouseEvent) {
        //Handler
    }

    function SelectEvent(e: React.ChangeEvent){
        //Handler
    }

    return (
    <React.Fragment>
        <Header H1backgroundColor="#0092CA" color="#393E46" fontSize="36px">
            ST[O]RM Championship
        </Header>
        {Navigator}
        <Div alignItems="center" flexDirection="row" width="100%" id={"main"}>
            <ContentBox LoginOnClick={LoginButtonEvent} SelectOnchange={SelectEvent} SignUpOnClick={SignUpButtonEvent} type="Let's Play"/>

            <ContentBox type="Description"/>
        </Div>
        <Footer Atext="Elielson U" color="#eee" fontSize="22px" href="https://github.com/ElielsonU">Made by</Footer>
    </React.Fragment>
    )
}


export default Home