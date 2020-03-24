import React from "react";
import styled from 'styled-components';


const StyledDiv = styled.h1`
color: salmon
text-align: center
font-size: 50px
`

const StyledSpecies = styled.p`
color: blue;
text-align: center;
font-size: 30px
`


export default function CharacterCard(props) {
  return (
    <>
    <StyledDiv>Name: {props.charac.name}</StyledDiv>
    <StyledSpecies>Species: {props.charac.species}</StyledSpecies>
    </>
    )
}
