// vai chamar os pokemons
import { Component } from "react";
import Pokemon from './Pokemon';
import Pokemons from '../data';
import Header from "./Header";


class Pokedex extends Component {
  render () {

    return (
      <section id='container'>
      <Header />
      <section id='secPokes'>
        { Pokemons.map((pokemon, { id }) => {
          return <Pokemon key={ id } poke={ pokemon }/>
          })
        }
      </section>
      </section>
    )
  }
}

export default Pokedex;