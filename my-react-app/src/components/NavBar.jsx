function NavBar({ pokemonList, setPokemonIndex }) {
  const handlePokemon = (i) => {
    setPokemonIndex(i);
  };
  return (
    <>
      <div>
        {pokemonList.map((p, index) => (
          <button onClick={() => handlePokemon(index)} key={p.name}>
            {p.name}
          </button>
        ))}
      </div>
    </>
  );
}
export default NavBar;
