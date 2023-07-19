import styled from "styled-components"

const StyledDiv = styled.div`
width: 95%;
height: 95vh;
max-width: 390px;
max-height: 840px;
margin: auto;
position: absolute;
top: 0; right: 0;
bottom: 0; left: 0;
border-radius: 40px;
background: url(${require("../images/wallpaper.png")}) ;
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