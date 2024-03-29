
function NavBar ({pokemonIndex, pokemonList, handleClickSuivant, handleClickPrecedant}) { 


    return ( 
    
    <div> 
    {pokemonIndex < pokemonList.length-1 ? <button onClick ={handleClickSuivant} > suivant </button> : null}

    {pokemonIndex > 0 ?  <button onClick ={handleClickPrecedant} > précédent  </button> : null}
     </div> 
 
    )
}


export default NavBar ; 