// libraries
import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

// js
import styles from './styles'
import api from '../../services/api';

// components
import PageHeader from '../../components/PageHeader';
import PokemonItem from '../../components/PokemonItem';

function PokeList({ navigation } : any) {
  const [pokemons, setPokemons] = useState([]);

  async function loadPokemons() {
    try {
      // Full API list length is 1118
      const response = await api.get(`/pokemon/?limit=6&offset=${pokemons.length}`);
      const results = response.data.results;
      for (let index = 0; index < results.length; index++) {
        const url = results[index].url.slice(0, -1);
        const id = url.split("/").pop();
        results[index].id = id;
        results[index].spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${results[index].id}.png`;
        const detailResponse = await api.get(`/pokemon/${results[index].id}`);
        const detail = detailResponse.data;
        results[index].types = detail.types;
        results[index].abilities = detail.abilities;
      }
      setPokemons(pokemons.concat(results));
    } catch (e) {
        console.log(e);
    }
  }

  useEffect(() => {
  }, []);

  useEffect(() => {
    loadPokemons();
  }, [])

  const renderItem = ({ item }: any) => {
    return (
      <PokemonItem 
        key={ item.name }
        pokemon={ item }
        navigation={ navigation }
      />
    )
  }

  return (
      <View style={styles.container}>
          <PageHeader title="Pokedex" />

          <FlatList
            onEndReached={_ => {
              loadPokemons();
            }}
            onEndReachedThreshold={0.5}
            data={pokemons}
            keyExtractor={(_, index) => "item_" + index}
            renderItem={renderItem}
          />
      </View>  
  )
}

export default PokeList;