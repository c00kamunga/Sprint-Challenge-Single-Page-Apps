import React from "react";
import styled from "styled-components";

export default function CharacterCard() {
  return (
    <>
      <h1>Name: {props.charac.name}</h1>
      <h1>Species: {props.charac.species}</h1>
    </>
  );
}
