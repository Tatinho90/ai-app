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
color: #353535;
padding: 5px;

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
display:flex;
align-items: center;
justify-content: center;
background-color: #FFCB45;
&:hover {
    cursor: pointer;
    background-color: rgba(255, 203, 69, 0.5)
}
`

export default function ChatWindow({url, firstName}){

const prompt = `I am ${firstName}` 
 
//State variables
const [messages, setMessages] = useState("")
const [typedMessage, setTypedMessage] = useState("")

//State variable updates
const updateChat = (e) => {
    setTypedMessage(e.target.value)
}

const updateConversation = () => {
    setMessages(`${typedMessage}`)
}

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


            <StyledInnerDiv >
                
                  
            </StyledInnerDiv>
                <form 
                onSubmit= {(e) => {
                      e.preventDefault()
                      setTypedMessage("")
                      }}>
                    <ChatEntry 
                        placeholder="Type message here"
                        value = {typedMessage}
                        onChange= {updateChat}
                        />
                    <SendContainer>
                        <SendIcon className="fa-regular fa-paper-plane"/>
                     </SendContainer>              
                </form>
        </ Background >
        </>
    )
}