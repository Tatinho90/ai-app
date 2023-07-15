import Background from "../Components/Chat window"
import {StyledInnerDiv} from "./WhoIsOnline"
import {Link, Route, Routes} from "react-router-dom"
import SmallProfilePic from "../Components/smallProfilePic"
import styled from "styled-components"

const ContactIcon = styled.i`
color: white;
margin-left: 130px;
margin-top: 50px;
`

const StyledContainer = styled.div`
display: flex;
flex-direction: row;
`

export default function ChatWindow(){
    return(
        <>
        <Background>
            <StyledContainer>
                <SmallProfilePic></SmallProfilePic>
                <Link to="/">
                    <ContactIcon className="fa-regular fa-address-book fa-lg" ></ContactIcon>
                </Link>
            </StyledContainer>
            
            <StyledInnerDiv>

            </StyledInnerDiv>
        </Background>
        </>
    )
}