import React, { useState } from "react";
import styled from 'styled-components';

const StyledForm = styled.form`
margin-top: 50px;
text-align: center;
`




export default function SearchForm(props) {
  const [search, setSearch] = useState('')
  // const [character, setCharacter] = useState(props.character)
  let list = props.character
  console.log(list)
  function nameFilter(event) {
   setSearch(event.target.value)
    props.filter(search)
}



  return (
    <section className="search-form">
      <StyledForm onSubmit={nameFilter}>
        <label>Search Name:</label>
        <input type="text" placeholder="search for a name" onChange={nameFilter} required value={search} />
        <input type="submit" value="Find name" />
      </StyledForm>
    </section>
  );
}
