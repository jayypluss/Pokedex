// libraries
import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements';

// js
import styles from './styles'

// components
import PageHeader from '../../components/PageHeader';
import TypeChip from '../../components/BaseComponents/TypeChip';

// models
import { PokemonAbilityItem } from '../../models/Ability';


function PokeDetails({ route }: any) {
  const { pokemon } = route.params;

  return (
      <View style={styles.container}>
        <PageHeader title="Pokemon Details" />

          <ScrollView
            style={styles.pokemonDetails}
            contentContainerStyle={{ 
              paddingHorizontal: 16,
              paddingBottom: 24,
            }}
          >
            <View style={styles.pokemonContainer}>
              <Image
                  source={{ uri: pokemon.spriteUrl }}
                  style={styles.image}
              />

              <View style={styles.overviewContainer}>
                <View style={styles.overviewLine}>
                  <Text style={styles.overviewTitle}>NAME:</Text>
                  <Text style={styles.overviewName}>{pokemon.name.toUpperCase()}</Text>
                </View>

                <View style={styles.overviewLine}>
                  <Text style={styles.overviewTitle}>TYPES:</Text>
                  
                  { pokemon.types.map((pokemonType: any) => {
                      return(
                        <React.Fragment 
                        key={pokemonType.type.name}
                        >
                        <TypeChip
                            name={pokemonType.type.name}
                        />
                        </React.Fragment>
                      );
                    })}
                </View>
              </View>

              <View style={styles.abilitiesContainer}>
                <Text style={styles.abilitiesTitle}>{"Abilites".toUpperCase()}</Text>
                <Divider style={styles.divider} />
                
                { pokemon.abilities.map((pokemonAbilityItem: PokemonAbilityItem) => {
                  return (
                    <React.Fragment
                      key={pokemonAbilityItem.ability.name}
                    >
                      <View>
                        <Text style={styles.abilityName}>{pokemonAbilityItem.ability.name.toUpperCase()}</Text>
                      </View>
                    </React.Fragment>
                  )
                }) }
              </View>
            </View>
          </ScrollView>
      </View>  
  )
}

export default PokeDetails;