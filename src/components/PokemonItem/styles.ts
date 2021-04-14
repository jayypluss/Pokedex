import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 16,
        marginVertical: 8,
        marginHorizontal: 12,
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
    
    id: {
        // fontFamily: 'Archivo_700Bold',
        color: '#5d566d',
        fontSize: 14,
        paddingTop: 10,
    },
    
    name: {
        // fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },
    
    image: {
        width: 150,
        height: 150,
    },
})

export default styles;