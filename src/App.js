import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import { Route, Link } from 'react-router-dom'
import WelcomePage from './components/WelcomePage';
import styled from 'styled-components';

const StyledDiv = styled.div`
background: lightgreen;
`;

const StyledLink = styled.div`
font-size: 30px;
text-align: center;
`

const StyledLink2 = stlyed.div`
font-size: 30px;
text-align: center;
`

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <StyledLink2><Link to="/welcome">Home page</Link></StyledLink2>
      <StyledLink><Link to="/characters">List of Characters</Link></StyledLink>
      <Route path="/characters" render={(props) => (<CharacterList{...props} />)} />
      <Route path="/welcome" render={(props) => (<WelcomePage{...props} />)} />
    </main>
  );
}
