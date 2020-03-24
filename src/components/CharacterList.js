import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';


const StyledCharacterHeader = styled.h2`
font-size: 40px
text-align: center;
`




export default function CharacterList() {
  const [character, setCharacter] = useState([])
  const [filterCharacter, setfilterCharacter] = useState([])
  // TODO: Add useState to track data from useEffect
  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then((response) => {
          console.log(response.data.results)
          setCharacter(response.data.results)
          setfilterCharacter(response.data.results)
        })
        .catch((error) => {
          console.error(error);
        })
    }
    getCharacters();
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log(character)
  function filter(userInput){
    setfilterCharacter(character.filter)
  }
  return (
    <>
    <SearchForm filter={filter} character={character}/>
      <section className="character-list">
        <StyledCharacterHeader>Character List:</StyledCharacterHeader>
        {
          filterCharacter.map((charac, key) => (
            <div key={key}>
            <CharacterCard charac={charac} />
            </div>
        ))
        }
      </section>
    </>
  );
}
