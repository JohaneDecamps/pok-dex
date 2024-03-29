import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar.jsx"; 

function App() {

const [ pokemonIndex, setpokemonIndex] = useState(0);

const handleClickSuivant = () => {setpokemonIndex(pokemonIndex +1)}
const handleClickPrecedant = () => {setpokemonIndex(pokemonIndex -1)}


  return (
    <> 
  <nav> 
       <NavBar
      pokemonIndex= {pokemonIndex}
      pokemonList= {pokemonList}
      handleClickSuivant= {handleClickSuivant}
      handleClickPrecedant = {handleClickPrecedant}/>
      
  </nav>
   
      <PokemonCard pokemon={pokemonList[pokemonIndex] }/> 
      
    </>
  );
}

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App;