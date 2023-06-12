import React from 'react'
import {
  Card, 
  PokemonName, 
  PokemonType, 
  EvolveButton
} from './styles'



const PokemonCard = ({
  pokemon,
  setPokemon,
  evolucao,
  evolucao2
}) => {

    const evoluirPokemon = () => {
      if (!pokemon.evolved && evolucao) {
        setPokemon(evolucao);
      } else if (pokemon.evolved && evolucao2) {
        setPokemon(evolucao2);
      } else {
        alert("Este pokemon não tem mais evoluções");
      }
        console.log("Cliquei no botão de evoluir")
    }
    
  return (
    <Card color={pokemon.color}>
        <img src={pokemon.img} alt={`Pokemon`}/>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonType>{pokemon.type}</PokemonType>
        <p>{pokemon.weith}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard