import styled from "styled-components"

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
border-radius: 40px;
background: url(${require("../images/wallpaper.png")}) no-repeat;
background-color: #353535;
overflow: hidden;
`

export default function Chatwindow({children}){
    return (
        <>
        <StyledDiv >  
            {children}
        </ StyledDiv >  
        </>
         
    )
}