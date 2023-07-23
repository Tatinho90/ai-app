import Background from "../Components/Chat window"
import Speechbubble from "../Components/speach-bubble"
import {StyledInnerDiv} from "./WhoIsOnline"
import {Link, Route, Routes} from "react-router-dom"
import SmallProfilePic from "../Components/smallProfilePic"
import styled from "styled-components"
import {useState, useRef, useEffect} from "react"

const apiUrl= "https://historicapi.netlify.app/.netlify/functions/fetchAI"
const scale= 0.9

//styles
const ContactIcon = styled.i`
position: absolute;
color: white;
right: ${26*scale}px;
margin-top: ${62*scale}px;
`

const StyledContainer = styled.div`
display: flex;
flex-direction: row;
`

const ChatEntry = styled.input`
width: 65.3%;
height: ${48*scale}px;
border-radius: 164px 0 0 164px;
border: 1.5px solid #FFCB45;
background-color: #E5E6E9;
position: absolute;
bottom: ${28*scale}px;
margin-left: 6%;
padding-left: ${25*scale}px;
font-family: Inter;
`
const SendIcon = styled.i`
color: #353535;
padding: ${6*scale}px;

`

const SendContainer = styled.div`
width: 16%;
height: ${50*scale}px;
border-radius: 0 164px 164px 0;
border-right: 1.5px solid #FFCB45;
border-top: 1.5px solid #FFCB45;
border-bottom: 1.5px solid #FFCB45;
background-color: #E5E6E9;
position: absolute;
bottom: ${28*scale}px;
right: ${21*scale}px;
display:flex;
align-items: center;
justify-content: center;
background-color: #FFCB45;
&:hover {
    cursor: pointer;
    background-color: rgba(255, 203, 69, 0.5)
}
`

const TextWrapper= styled.div`
height: 80%;
overflow: auto;
overflow-x: hidden;
`

 
export default function ChatWindow({url, firstName, prompt}){

  

 
//State variables
const [messages, setMessages] = useState([{role: "system", content: `${prompt} `}])
const [typedMessage, setTypedMessage] = useState("")
const [loading, setLoading] = useState(true)

//State variable updates
const updateChat = (e) => {
    setTypedMessage(e.target.value)
}

const deleteMessageBubble = ()  => {
    setTypedMessage("")
}

const updateConversation = (value) => {
    const object= {role: "user", content: value}
    setMessages(prev => [...prev, object])
}

const addAIResponse = (value) => {
    const object = {role: "assistant", content: value};
    setMessages(prev => [...prev, object])
}

const displayedchatMessage = messages.map(elem => {
    if (elem.role != "system"){
        return <Speechbubble message={elem.content} role={elem.role}/>
    }

})

//this code will scroll to bottom of chat (https://stackoverflow.com/questions/61756810/scrolltobottom-using-reactjs-in-chat-app-for-new-messages)

const containerRef = useRef(null);

    useEffect(() => {

      if(containerRef && containerRef.current) {
        const element = containerRef.current;
        element.scroll({
          top: element.scrollHeight,
          left: 0,
          behavior: "smooth"
        })
      }

    }, [containerRef, messages])

//updating messages and clearing chat bubble

const sendChatMessage = () => {
    if (typedMessage.length > 0){
        updateConversation(typedMessage)
        deleteMessageBubble()
    }
    
}

// API call

useEffect(() => {
if(messages[messages.length-1].role != "assistant"){
    setLoading(true)
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
    body:  JSON.stringify(messages)
})
    .then(res => res.json())
    .then(data => addAIResponse(data.reply))
    .then(data => setLoading(false))
} 
}, [messages])




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


            <StyledInnerDiv style={{paddingTop: `${26*scale}px`, boxSizing: "border-box"}}>
                    <TextWrapper ref={containerRef}>
                        {displayedchatMessage}   
                    </TextWrapper>                  
            </StyledInnerDiv>

                <form 
                onSubmit= {(e) => {
                      e.preventDefault()
                      sendChatMessage()                 
                      }}>
                    <ChatEntry 
                        placeholder="Type message here"
                        value = {typedMessage}
                        onChange= {updateChat}
                        />
                    <SendContainer onClick =  {sendChatMessage}   >
                        <SendIcon 
                            className="fa-regular fa-paper-plane"
                            />
                     </SendContainer>              
                </form>

                {loading && <h4 style={{position:"absolute", bottom: "59px", left:"42px", color:"grey",fontSize:"12px",fontWeight:"400"}}>{firstName} is typing...</h4>}
        </ Background >
        </>
    )
}