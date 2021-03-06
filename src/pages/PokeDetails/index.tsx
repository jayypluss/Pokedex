// libraries
import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {Divider} from 'react-native-elements';

// js
import styles from './styles';

// components
import PageHeader from '../../components/PageHeader';
import TypeChip from '../../components/BaseComponents/TypeChip';

// models
import {PokemonAbilityItem} from '../../models/Ability';
import {PokemonStatItem} from '../../models/Stat';

function PokeDetails({route}: any) {
  const {pokemon} = route.params;

  return (
    <View style={styles.container}>
      <PageHeader title="Pokemon Details" />

      <ScrollView
        style={styles.pokemonDetails}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.pokemonContainer}>
          <Image source={{uri: pokemon.spriteUrl}} style={styles.image} />

          <View style={[styles.infoContainer, styles.numberContainer]}>
            <Text style={styles.id}># {pokemon.id?.padStart(3, '0')}</Text>
          </View>

          <View style={[styles.infoContainer, styles.nameContainer]}>
            <Text style={styles.sectionTitle}>NAME:</Text>
            <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
          </View>

          {/* DIVIDER */}
          <Divider style={styles.divider} />

          <View style={[styles.infoContainer, styles.typesContainer]}>
            <Text style={styles.sectionTitle}>TYPES</Text>

            <View style={[styles.typesListContainer]}>
              {pokemon.types.map((pokemonType: any) => {
                return (
                  <React.Fragment key={pokemonType.type.name}>
                    <TypeChip name={pokemonType.type.name} />
                  </React.Fragment>
                );
              })}
            </View>
          </View>

          {/* DIVIDER */}
          <Divider style={styles.divider} />

          <View
            style={[styles.infoContainer, styles.massAndHeightSpecsContainer]}>
            <Text style={[styles.sectionTitle, styles.littleTitle]}>
              HEIGHT:
            </Text>
            <Text style={[styles.name, styles.littleValue]}>
              {(pokemon.height * 0.1).toFixed(2)} m
            </Text>

            <Text style={[styles.inlineDivider]}>|</Text>

            <Text style={[styles.sectionTitle, styles.littleTitle]}>
              WEIGHT:
            </Text>
            <Text style={[styles.name, styles.littleValue]}>
              {(pokemon.weight * 0.1).toFixed(2)} kg
            </Text>
          </View>

          {/* DIVIDER */}
          <Divider style={styles.divider} />

          <View style={styles.infoContainer}>
            <Text style={styles.sectionTitle}>ABILITIES</Text>

            {pokemon.abilities.map((item: PokemonAbilityItem) => {
              return (
                <React.Fragment key={item.ability.name}>
                  <View>
                    <Text style={styles.abilityName}>
                      {item.ability.name.toUpperCase()}
                    </Text>
                  </View>
                </React.Fragment>
              );
            })}
          </View>

          {/* DIVIDER */}
          <Divider style={styles.divider} />

          <View style={[styles.infoContainer, styles.statsContainer]}>
            <Text style={styles.sectionTitle}>STATS</Text>

            <View style={styles.statListContainer}>
              {pokemon.stats.map((item: PokemonStatItem) => {
                return (
                  <React.Fragment key={item.stat.name}>
                    <View style={styles.statContainer}>
                      <Text style={styles.statName}>
                        {item.stat.name.toUpperCase()}:{' '}
                      </Text>
                      <Text style={styles.statValue}>{item.base_stat}</Text>
                    </View>
                  </React.Fragment>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default PokeDetails;
