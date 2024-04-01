
function NavBar ({pokemonIndex, pokemonList, handleClickSuivant, handleClickPrecedant}) { 


    return ( 
    
    <div> 
  {pokemonList.map((pokemon, setPokemonIndex) => 
  
  <button key={pokemon.name} onClick={() => {handleClickSuivant(setPokemonIndex)}}> {pokemon.name} </button>
  )}
     </div> 
 
    )
}


export default NavBar ; 