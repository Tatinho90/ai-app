import styled from "styled-components"
import {Link, Route, Routes} from "react-router-dom"

const textColor= "#000"



const StyledDiv = styled.div`
margin-left: 0%;
margin-top: 4%;
margin-bottom: 4%;
height: 60px;
width: 60px;
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
const StyledContactName = styled.h3`
color: ${textColor};
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.32px;
margin:0;
`

const StyledOnlineStatus = styled.h3`
color: ${textColor};
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.28px;
margin:0;
`

const StyledContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
border-bottom: 1px solid #E5E6E9;
padding : 0 5% 0 5%;
&: hover {
    background-color: rgba(255, 199, 0, 0.25);
    cursor: pointer;
}
`

const StyledInnerContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
justify-content: center;
gap: 4px;
`

const OnlinePoint = styled.div`
height: 13px;
width: 13px;
border-radius: 50%;
background-color: #22C55E;
position: relative;
top: 27px;
right: 18px;
z-index: 99;
border: 2px solid white;;
`
const StyledArrow = styled.i`
position: absolute;
right: 18px;
margin-top: auto;
margin-bottom: auto;
color: rgba(0,0,0,0.4);
`

export default function Pics(props){
    return(
        <>
        <Link
         to="/chatWindow"
         style={{textDecoration: "none"}}>
            <StyledContainer
            onClick = {() => props.changeUser({url: props.url, firstName: props.firstName})}
            >
                
                <StyledDiv>
                    <StyledImage src={props.url}>  
                    </ StyledImage >
                </StyledDiv>
                <OnlinePoint/>    
                <StyledInnerContainer>
                    <StyledContactName>{`${props.firstName} ${props.lastName}`}</StyledContactName>
                    <StyledOnlineStatus>Online</StyledOnlineStatus>
                    
                </StyledInnerContainer>
                <StyledArrow className="fa-solid fa-chevron-right" />
            </StyledContainer>
         </Link>

        </>
    
    )
}