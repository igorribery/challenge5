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
import { Pokemon } from "./components";


const App = () => {

  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    loadApi()
  }, []);

  const loadApi = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');

    const arraySort = [...response.data.results];

    arraySort.sort((a, b) => {

    return a.name.localeCompare(b.name);
    })

    const promisesArray = arraySort.map((item) => {
      return axios.get(item.url)
    });

    Promise.all(promisesArray).then(values => setList(values));
   
  }
  

  return (
    <>
      <h3>Desafio fernandev</h3>
      <h1>Consumindo API Pokémon</h1>
      <hr />
      {!list.length && 'Carregando...'}
      {list.map((item) => (
        <Pokemon key={item.data.name} details={item.data} />
      ))}
    </>
  )
}

export default App;