import styled from "styled-components"
import ChatWindow from "../Components/Chat window"
import ProfilePics from "../Components/Profile-pics"
import celebrities from "../celebrities"

const StyledInnerDiv = styled.div`
border-radius: 30px 30px 0px 0px;
background: #FFF;
width: 100%;
height: 85%;
position: absolute;
bottom: 0;
`
const StyledTitle = styled.h1`
margin-top: 15%;
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 700;
letter-spacing: -0.4px;
text-align: center;`

const StyledTopLine = styled.div`
width: 109px;
height: 5px;
flex-shrink: 0;
border-radius: 90px;
background: #E5E6E9;
margin: auto;
margin-top: 19px;
margin-bottom: 8px;
`

export default function WhoIsOnline({changeUser}){

    const onlinePhotos = celebrities.map(elem => { 
        return <ProfilePics url={elem.profilePicURL} 
        firstName={elem.firstName}
        lastName = {elem.lastName}
        key = {elem.id}
        changeUser = {changeUser}
         />
    } )
    return (
        <>
        <ChatWindow>
            <StyledTitle>Contacts</StyledTitle>
            <StyledInnerDiv>
                <StyledTopLine/>
                {onlinePhotos}
            </StyledInnerDiv>
        
        </ChatWindow >
        </ >        
       
    )
   
} 

export {StyledInnerDiv}