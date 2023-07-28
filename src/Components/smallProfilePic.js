import styled from "styled-components"
import {Link, Route, Routes} from "react-router-dom"

const textColor= "white"
const scale= 0.90


const StyledDiv = styled.div`
height: ${61*scale}px;
width: ${61*scale}px;
border-radius: 50%;
background-color: white;
overflow: hidden;
border: 1.5px solid #FFCB45;
`

const StyledImage = styled.img`
object-fit: cover;
width: 150%;
position: relative;
left: -${14*scale}px;
`
const StyledContactName = styled.h3`
color: ${textColor};
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.32px;
margin:0;
`

const StyledOnlineStatus = styled.h3`
color: ${textColor};
font-size: 12px;
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
padding : 0 5% 0 5%;
margin-top: ${28*scale}px;
margin-left: ${12*scale}px;
margin-right: -${10*scale}px;
`

const StyledInnerContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: ${3*scale}px;
justify-content: center;
gap: 4px;
`

const OnlinePoint = styled.div`
height: 9px;
width: 9px;
border-radius: 50%;
background-color: #22C55E;
position: relative;
top: ${24*scale}px;
right: ${16*scale}px;
border: 2px solid white;;
`


export default function Pics(props){
    return(
        <>
        
            <StyledContainer>
                
                <StyledDiv>
                    <StyledImage src={props.url}>  
                    </ StyledImage >
                </StyledDiv>
                <OnlinePoint/>    
                <StyledInnerContainer>
                    <StyledContactName>{`${props.firstName}`}</StyledContactName>
                    <StyledOnlineStatus>Online</StyledOnlineStatus>
                    
                </StyledInnerContainer>
            </StyledContainer>
         
        </>
    
    )
}