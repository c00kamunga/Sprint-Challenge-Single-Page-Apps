import React, { useState } from "react";
import styled from 'styled-components';





export default function SearchForm(props) {
 const [search, setSearch] = useState('')
 let list = props.character
 console.log(list)
 function nameFilter(event){
   setSearch(event.target.value)
   props.filter(search)
 }
  return (
    <section className="search-form">
     <form onSubmit={nameFilter}/>
     <label>Search Name:</label>
     <input type="text" placeholder="search for a name" onChange={nameFilter} required value={search}/>
     <input type="submit" value="Find name"/>
     <form/>
    </section>
  );
}
