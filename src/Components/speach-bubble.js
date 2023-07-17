import styled from "styled-components"

const StyledDiv = styled.div`
padding: 10px 20px;
gap: 10px;
display: inline-block;
float: left;
margin-right: 40px;
max-width: 158px;
border-radius: 100px;
background: rgba(255, 199, 0, 0.25);
`
const StyledH3 = styled.h3`
color: #000;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.3px;
margin: 0;
`

const OuterDiv = styled.div`
width: 100%;
background-color: green;
margin: 38px 20px 0 20px;
`

export default function Speechbubble({message}){
    return (
        <>
        <OuterDiv>
            <StyledDiv>
                <StyledH3>{message}</StyledH3>
            </ StyledDiv>
        </OuterDiv>
        
        </>
    )

}