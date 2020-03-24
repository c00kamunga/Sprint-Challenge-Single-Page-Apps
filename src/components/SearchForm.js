import React, { useState } from "react";
import styled from 'styled-components';

const StyledForm = styled.form`
margin-top: 50px;
text-align: center;
`




export default function SearchForm(props) {
  const [search, setSearch] = useState('')
  const [character, setCharacter] = useState(props.character)
  
  let list = props.character
  console.log(list)

  function nameFilter(event) {
    setSearch(event.target.value)
    const names = props.character.map(character => {
      return character.name
    })
    console.log(names)
    
    const filteredName = names.filter((name) => {
      return name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    console.log(filteredName);
    if (filteredName.length === 0){
      console.log(search)
      setCharacter([])
      setSearch('')
    }
    else{
  
      setSearch(event.target.value)
      setCharacter(filteredName)
    }
}



  return (
    <section className="search-form">
      <StyledForm onSubmit={nameFilter}>
        <label>Search Name:</label>
        <input type="text" placeholder="search for a name" onChange={nameFilter} required value={search} />
      </StyledForm>
      <ul>
        {character.map((character, key ) => {
          return(
          <li key={key}>
            {character}
          </li>
          )
        })}
      </ul>
    </section>
  );
}
