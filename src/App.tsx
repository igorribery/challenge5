/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id

DICA:

imagem => sprites.front_default

experiência => base_experience

EXTRA: se puder ordene por nome.
*/

import axios from "axios";
import { useEffect, useState } from "react";
import { List } from "./types/list";
import { Pokemon } from "./components";


const App = () => {

  const [list, setList] = useState<List[]>([]);

  useEffect(() => {
    loadApi()
  }, []);

  const loadApi = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');

    const arraySort = [...response.data.results];

    arraySort.sort((a, b) => {

      return a.name.localeCompare(b.name);
    })
   
    setList(arraySort);
  }
  

  return (
    <>
      <h3>Desafio fernandev</h3>
      <h1>Consumindo API Pokémon</h1>
      <hr />
      {list.map((item) => (
        <Pokemon key={item.name} data={item} />
      ))}
    </>
  )
}

export default App;