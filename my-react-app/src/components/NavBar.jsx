function NavBar({ pokemonIndex, pokemonList, setPokemonIndex }) {
  const nextPokemon = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const previousPokemon = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <>
      <div>
        {pokemonIndex > 0 ? (
          <button onClick={previousPokemon}>précédent</button>
        ) : (
          ""
        )}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={nextPokemon}>suivant</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default NavBar;
