import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  

  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  });

  const pikachu = {
    ...pokemon,
    name: "Pikachu",
    type: "Electric",
    evolved: false,
    weight: 6,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/600px-0025Pikachu.png',
    id: 1
  };

  const raichu = {
    ...pokemon,
    name: "Raichu",
    type: "Electric",
    evolved: false,
    weight: 30,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b0/0026Raichu.png/600px-0026Raichu.png',
    id: 1
  }


  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
      pokemon={pokemon}
      setPokemon={setPokemon}
      evolucao={raichu}
      />
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
