import styled from "styled-components"

const scale=0.9

const StyledDiv = styled.div`
padding: 12px 24px;
display: inline-block;
float: ${ props => props.role === "assistant" ? "right" : "left" };
max-width: ${188*scale}px;
border-radius: 15px;
background: ${ props => props.role  === "user" ? "rgba(255, 199, 0, 0.25)" : "rgba(255, 137, 51, 0.25)" }
`
const StyledH3 = styled.h3`
color: #000;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.3px;
margin: 0;
`

const OuterDiv = styled.div`
width: 100%;
margin: 7px 20px 0px 20px;
`

const FlexContainer = styled.div`
display: flex;
`

export default function Speechbubble({message, role}){
    return (
        <>
        <FlexContainer>
        <OuterDiv>
            <StyledDiv message={message} role={role}>
                <StyledH3 >{message}</StyledH3>
            </ StyledDiv>
        </OuterDiv>
        </ FlexContainer>
        
        
        </>
    )

}