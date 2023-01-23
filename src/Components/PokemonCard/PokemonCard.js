import React from "react";
import {
  Card,
  PokemonImg,
  PokemonName,
  PokemonType,
  EvolveButton,
} from "./styles";

const PokemonCard = (props) => {
  console.log(props)
  const { color, image, name, type, weight } = props;

  const evoluirPokemon = () => {
    console.log("Cliquei no botão de evoluir");
  };

  return (
    <Card color={color}>
      <PokemonImg src={image} alt={`Pokemon`} />
      <PokemonName>{name}</PokemonName>
      <PokemonType>{type}</PokemonType>
      <p>{weight}kg</p>

      <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  );
};

export default PokemonCard;
