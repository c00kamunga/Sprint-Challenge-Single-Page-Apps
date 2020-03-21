import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response.data.results);
          setCharacter(response.data.results);
          setFilterCharacter(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getCharacters();
  }, []);
  function filter(userInput){
    setFilterCharacter(character.filter)
  }

  return (
    <>
    <SearchForm filter={filter}/>
    <section className="character-list">
      <h2>Character List: </h2>
      {filterCharacter.map((charac) => (
        <>
        <CharacterCard charac={charac}/>
        </>
      ))}
    </section>
    </>
  );
}
