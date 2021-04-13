import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: '#d6283a',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    header: {
      alignItems: 'center'
    },

    title: {
        // fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
    }
})

export default styles;