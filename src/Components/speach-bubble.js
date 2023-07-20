import styled from "styled-components"

const StyledDiv = styled.div`
padding: 12px 24px;
display: inline-block;
float: ${ props => props.message === "hi" ? "left" : "right" };
max-width: 188px;
border-radius: 100px;
background: ${ props => props.message === "hi" ? "rgba(255, 199, 0, 0.25)" : "rgba(255, 137, 51, 0.25)" }
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

export default function Speechbubble({message}){
    return (
        <>
        <FlexContainer>
        <OuterDiv>
            <StyledDiv message={message}>
                <StyledH3 >{message}</StyledH3>
            </ StyledDiv>
        </OuterDiv>
        </ FlexContainer>
        
        
        </>
    )

}