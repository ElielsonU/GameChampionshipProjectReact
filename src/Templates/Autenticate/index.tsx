import React from "react";
import Button from "../../Components/Cells/Button";
import Div from "../../Components/Cells/Div";

class Autenticate extends React.Component {
    render(): React.ReactNode {
        const body = document.querySelector("body")
        body?.classList.add("autenticate")
        function BackOnClick(e:React.MouseEvent ) {
            body?.classList.remove("autenticate")
            window.history.back()
        }
        function ContinueOnCliCK(e:React.MouseEvent ) {
            //handler
        }
        return (
            <Div alignItems="flex-end" flexDirection="row" height="80%">
                <Div alignItems="" flexDirection="row" width="50%">
                    <Button backgroundColor="#222831" borderColor="#222831" color="#eee" fontSize="120%" onClick={BackOnClick} padding="5px 15px">
                        {"Back"}
                    </Button>
                    <Button backgroundColor="#eee" borderColor="#eee" color="#222831" fontSize="120%" onClick={ContinueOnCliCK} padding="5px 15px">
                        {"Continue"}
                    </Button>
                </Div>
            </Div>
        )
    }
}

export default Autenticate