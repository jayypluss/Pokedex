// libraries
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    name: string,
}

function TypeChip(props: Props) {
    const { name } = props;

    const typeColors: {[key: string]: string} = {
        "bug": "#789c5f",
        "electric": "#d9e317",
        "fairy": "#e38fc4",
        "fighting": "#ffa600",
        "fire": "#d42215",
        "flying": "#edc67e",
        "ghost": "#5808c9",
        "grass": "#15d445",
        "ground": "#ab9a85",
        "ice": "#7bd4ed",
        "normal": "#9e9e9e",
        "psychic": "#85d4ce",
        "poison": "#9e15d4",
        "rock": "#574632",
        "steel": "#575555",
        "water": "#2f66d4",
    }

    const typeColor = typeColors[name] || '#000';

    return (
        <View style={[styles.container, { backgroundColor: typeColor, marginRight: 2 }]}>
            <Text style={styles.typeName}>{name.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 80,
        borderRadius: 60,
        marginBottom: 20,
        textAlign: 'center',
    },
    typeName: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default TypeChip;