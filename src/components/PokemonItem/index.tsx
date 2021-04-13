// libraries
import React, { memo } from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// js
import styles from './styles'

// components
import TypeChip from '../BaseComponents/TypeChip';

// models
import { Pokemon } from '../../models/Pokemon';

export interface PokemonItemProps {
    pokemon: Pokemon;
    navigation: any;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon, navigation }) => {

    function navigateToPokeDetail() {
        navigation.navigate('PokeDetails', { pokemon })
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={navigateToPokeDetail}
        >

            <View>
                <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
            </View>

            <Image source={{ uri: pokemon.spriteUrl }} style={styles.image} />

            { pokemon.types.map((pokemonType: any) => {
              return (
                <React.Fragment 
                    key={pokemonType.type.name}
                >
                    <TypeChip 
                        name={pokemonType.type.name}
                    />
                </React.Fragment>
              )
            }) }
        </TouchableOpacity>  
    )
}

export default memo(PokemonItem);