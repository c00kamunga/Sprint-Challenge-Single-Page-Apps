import React from "react";

const StyledIMG = styled.img`
border: 10px solid red;
dislay: block;
margin-left: auto;
auto;
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
