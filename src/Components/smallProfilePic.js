import styled from "styled-components"
import {Link, Route, Routes} from "react-router-dom"

const textColor= "white"


const StyledDiv = styled.div`
height: 52px;
width: 52px;
border-radius: 50%;
background-color: white;
overflow: hidden;
border: 1.5px solid #FFCB45;
`

const StyledImage = styled.img`
object-fit: cover;
width: 150%;
position: relative;
left: -12px;
`
const StyledContactName = styled.h3`
color: ${textColor};
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.32px;
margin:0;
`

const StyledOnlineStatus = styled.h3`
color: ${textColor};
font-size: 11px;
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
margin-top: 28px;
margin-left: 10px;;
margin-right: -10px;
`

const StyledInnerContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 3px;
justify-content: center;
gap: 4px;
`

const OnlinePoint = styled.div`
height: 8px;
width: 8px;
border-radius: 50%;
background-color: #22C55E;
position: relative;
top: 20px;
right: 15px;
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