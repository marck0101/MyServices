import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    title:{
        marginTop: 50,
        fontSize: 40,
        color: 'white',
        fontWeight: '800', 
    },
    button: {
        borderColor: 'purple',
        borderWidth: 6,
        borderTopWidth: 3,
        borderLeftWidth: 4, 
        borderRadius: 30,
        padding: 40,
        margin: 70,
        width: '60%',
    },
    buttonText:{
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    scrollView: {
        width: '80%',
        marginBottom: 20,
        marginVertical: 70,
        // borderColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
    }
});

export default Styles;