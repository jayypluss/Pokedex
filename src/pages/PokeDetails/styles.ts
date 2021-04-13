import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        height: '100px'
    },

    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },

    pokemonContainer: {
        height: 630,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 16,
        overflow: 'hidden',
        alignItems: 'center',

        //card shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },

    pokemonDetails: {
        marginTop: 10
    },

    image: {
        width: 300,
        height: 300,
    },

    overviewContainer: {
        marginBottom: 15,
    },

    overviewLine: {
        flexDirection: 'row',
    },

    overviewTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        marginRight: 10,
    },

    overviewName: {
        fontSize: 18,
        fontWeight: 'normal',
    },

    abilitiesContainer: {
        flex: 1,
    },

    abilitiesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },

    divider: {
        marginBottom: 10,
        width: 300,
    },

    abilityName: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'normal',
        marginVertical: 5,
    },
})

export default styles;