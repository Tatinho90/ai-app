import styled from "styled-components"

const StyledDiv = styled.div`
display: flex;
padding: 10px 20px;
align-items: flex-start;
gap: 10px;
display: flex;
padding: 10px 20px;
align-items: flex-start;
gap: 10px;
max-width: 218px;
border-radius: 100px;
background: rgba(255, 199, 0, 0.25);
`
const StyledH3 = styled.h3`
color: #000;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.3px;
`

export default function Speechbubble({message}){
    return (
        <>
        <StyledDiv>
            <StyledH3>{message}</StyledH3>
        </ StyledDiv>
        </>
    )

}