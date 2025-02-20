import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function App() {
  const [pokemon1, setPokemon1] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png",
    id: 0,
  });

  // Para fazer seus próximos pokemons, crie novos estados!
  const [pokemon2, setPokemon2] = useState({
    name: "Jigglypuff ",
    type: "normal",
    evolved: false,
    weight: 5.5,
    color: "violet",
    image:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    id: 1,
  });

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard
        data={pokemon1}
        />
       
        {/* Crie aqui seus próximos pokemons! */}
       <PokemonCard
          data={pokemon2}
        />
      </FlexContainer>
    </>
  );
}

export default App;
