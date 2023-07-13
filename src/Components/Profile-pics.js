import styled from "styled-components"

const StyledH1 = styled.h1`
margin-left: 5%;
margin-top: 5%;
`

const StyledDiv = styled.div`
margin-left: 5%;
margin-top: 5%;
height: 70px;
width: 70px;
border-radius: 50%;
background-color: white;
overflow: hidden;
border: 2.5px solid #FFCB45;
`

const StyledImage = styled.img`
object-fit: cover;
width: 150%;
position: relative;
left: -15px;

`

export default function Pics(props){
    return(
        <>
        <></>
        <StyledDiv>
        <StyledImage src={props.url}/>
    </StyledDiv>
        </>
    
    )
}