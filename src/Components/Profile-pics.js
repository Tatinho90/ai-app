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
const StyledContactName = styled.h3`
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.32px;
margin:0;
`

const StyledOnlineStatus = styled.h3`
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.28px;
margin:0;
`

const StyledContainer = styled.div`
display: flex;
flex-direction: row
border: 1px solid green;
`

const StyledInnerContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
justify-content: center;
gap: 13px;
`

export default function Pics(props){
    return(
        <>
        <StyledContainer>
            <StyledDiv>
                <StyledImage src={props.url}/>
            </StyledDiv>
            <StyledInnerContainer>
                <StyledContactName>{`${props.firstName} ${props.lastName}`}</StyledContactName>
                <StyledOnlineStatus>Online</StyledOnlineStatus>
            </StyledInnerContainer>
   
        </StyledContainer>
       

        </>
    
    )
}