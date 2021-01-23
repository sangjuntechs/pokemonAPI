import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "./Store";
import {fetchPokemonData} from './actions/PokemonAction'

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const pokemonReducer = useSelector(
    (state: RootReducerType) => state.PokemonReducer
  );
  const dispatch = useDispatch();

  const handlePokemonName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const searchButtonTapped = () => {
    dispatch(fetchPokemonData(pokemonName))
  }
 
  return (
    <div className="App">
      <input value={pokemonName} onChange={handlePokemonName} />
      <button onClick={searchButtonTapped}>포켓몬 찾기</button>
      <div>
        {pokemonReducer.success && (
          <div>
            <p>{pokemonName}</p>
            {pokemonReducer.pokemon?.abilities.map((abilities) => {
              return (
                <div>
                  <p>{abilities.ability.name}</p>
                  <p>{abilities.slot}</p>
                </div>
              );
            })}
            <img src={pokemonReducer.pokemon?.sprites.front_default} alt='pokefront'/>
            <img src={pokemonReducer.pokemon?.sprites.back_default} alt= "pokeback"/>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
