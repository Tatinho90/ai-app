import styled from "styled-components"
import image from "../images/wallpaper.png"
import Pic from "./Profile-pics"

const StyledDiv = styled.div`
width: 100%;
height: 100vh;
max-width: 325px;
max-height: 700px;
background-color: white;
margin: auto;
position: absolute;
top: 0; right: 0;
bottom: 0; left: 0;
border-radius: 20px;
background: url(${image}) no-repeat;
background-color: #353535;
`

export default function Chatwindow(){
    return (
        <StyledDiv>
            <Pic />
        </StyledDiv>
    )
}