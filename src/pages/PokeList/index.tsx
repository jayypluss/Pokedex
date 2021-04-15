// libraries
import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

// js
import styles from './styles';
import api from '../../services/api';

// components
import PageHeader from '../../components/PageHeader';
import PokemonItem from '../../components/PokemonItem';

// Pokemons List Page
function PokeList({navigation}: any) {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  // Loads next 6 pokemons to concatenate on current pokemon array
  async function loadPokemons() {
    try {
      if (!loading) {
        setLoading(true);
        // Full API list length is 1118 but infinite scroll loads 6 at a time
        const response = await api.get(
          `/pokemon/?limit=6&offset=${pokemons.length}`,
        );
        const results = response.data.results;
        for (let index = 0; index < results.length; index++) {
          const url = results[index].url.slice(0, -1);
          const id = url.split('/').pop();
          results[index].id = id;
          results[
            index
          ].spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${results[index].id}.png`;
          const detailResponse = await api.get(`/pokemon/${results[index].id}`);
          const detail = detailResponse.data;
          results[index].types = detail.types;
          results[index].abilities = detail.abilities;
          results[index].height = detail.height;
          results[index].weight = detail.weight;
          results[index].stats = detail.stats;
        }
        setPokemons(pokemons.concat(results));
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  // Unmounts components
  useEffect(() => {}, []);

  // Loads Pokemons on Page mount
  useEffect(() => {
    loadPokemons();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Renders Pokemon card item
  const renderItem = ({item}: any) => {
    return (
      <PokemonItem key={item.name} pokemon={item} navigation={navigation} />
    );
  };

  // Renders "loading" footer when items are loading
  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {loading ? <ActivityIndicator color="black" /> : null}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <PageHeader title="Pokedex" />

      <FlatList
        onEndReached={_ => {
          loadPokemons();
        }}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.5}
        data={pokemons}
        keyExtractor={(_, index) => 'item_' + index}
        renderItem={renderItem}
      />
    </View>
  );
}

export default PokeList;
