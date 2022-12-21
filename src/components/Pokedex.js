import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";


const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <img src="https://w7.pngwing.com/pngs/173/464/png-transparent-pokemon-ball-pokeball-area-wiki-technology-thumbnail.png" alt="pokemon" className="pokebola"  width={50} height={50}/>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div className="loadin">
          <img src="https://w7.pngwing.com/pngs/812/169/png-transparent-pokemon-x-and-y-pokemon-go-pikachu-mew-pokemon-go-white-mammal-face-thumbnail.png" alt="pokemon" className="pokebola"  width={80} height={80}/>
          <p >cargando pokemones.....</p>
        </div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
