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
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getCharacters();
  }, []);


  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
