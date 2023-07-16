import Background from "../Components/Chat window"
import {StyledInnerDiv} from "./WhoIsOnline"
import {Link, Route, Routes} from "react-router-dom"
import SmallProfilePic from "../Components/smallProfilePic"
import styled from "styled-components"
import {useState} from "react"

//styles
const ContactIcon = styled.i`
position: absolute;
color: white;
right: 22px;
margin-top: 54px;
`

const StyledContainer = styled.div`
display: flex;
flex-direction: row;
`

const ChatEntry = styled.input`
width: 63.5%;
height: 48px;
border-radius: 164px 0 0 164px;
border: 1.5px solid #FFCB45;
background-color: #E5E6E9;
position: absolute;
bottom: 28px;
margin-left: 6%;
padding-left: 25px;
font-family: Inter;
`
const SendIcon = styled.i`

`

const SendContainer = styled.div`
width: 16%;
height: 50px;
border-radius: 0 164px 164px 0;
border-right: 1.5px solid #FFCB45;
border-top: 1.5px solid #FFCB45;
border-bottom: 1.5px solid #FFCB45;
background-color: #E5E6E9;
position: absolute;
bottom: 28px;
right: 18px;
`

export default function ChatWindow({url, firstName}){


    return(
        <>
        <Background >
            <StyledContainer>
                <SmallProfilePic
                url = {url}
                firstName = {firstName}
                ></SmallProfilePic>
                <Link to="/">
                    <ContactIcon className="fa-regular fa-address-book fa-lg" ></ContactIcon>
                </Link>
            </StyledContainer>

{/* Chat Window Starts here  */}

            <StyledInnerDiv >
                
                  
            </StyledInnerDiv>
                <form>
                    <ChatEntry placeholder="Type Message here"/>
                    <SendContainer/>
                    {/* <SendIcon className="fa-regular fa-paper-plane"/> */}
                    
                </form>
        </ Background >
        </>
    )
}