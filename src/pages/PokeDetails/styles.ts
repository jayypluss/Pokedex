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

        elevation: 9
    },

    pokemonDetails: {
        marginTop: 10
    },

    image: {
        width: 300,
        height: 300
    },

    infoContainer: {
        marginVertical: 15
    },

    id: {
        color: '#5d566d',
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginRight: 10,
        textAlign: 'center'
    },

    name: {
        fontSize: 18,
        fontWeight: 'normal'
    },

    divider: {
        marginBottom: 10,
        width: 300,
        height: 1
    },

    typesListContainer: {
        width: '100%',
        flexDirection: 'row',
    },

    abilityName: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'normal',
        marginVertical: 5
    },

    inlineDivider: {
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 16
    },

    statsContainer: {
        width: '100%',
        flexDirection: 'column'
    },

    statListContainer: {
        marginHorizontal: 55
    },

    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    statName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5
    },

    statValue: {
        fontSize: 16,
        fontWeight: 'normal',
        marginVertical: 5
    },
})

export default styles;