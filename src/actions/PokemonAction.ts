import axios from 'axios'
import {Dispatch} from 'redux'
import {PokemonDispatchType, POKEMON_SUCCESS, POKEMON_FAIL } from './PokemonActionType'

export const fetchPokemonData = (pokemonName: string) => async (dispatch:Dispatch<PokemonDispatchType>) => {
    try{
        const res = await axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const data = res.data

        dispatch({
            type:POKEMON_SUCCESS,
            payload:data
        })

    } catch(err) {
        dispatch({
            type:POKEMON_FAIL
        })
    }
}