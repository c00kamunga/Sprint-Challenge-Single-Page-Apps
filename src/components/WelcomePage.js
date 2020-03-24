import React from "react";
import styled from 'styled-components';

const StyledIMG = styled.img`
border: 10px solid red
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
`




export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <StyledIMG
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
