import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Styles = StyleSheet.create({
    button: {
        borderColor: 'purple',
        borderWidth: 6,
        borderTopWidth: 3,
        borderLeftWidth: 4, 
        borderRadius: 30,
        padding: 30,
        marginBottom: 20,
        width: '100%',
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default function Card(props){
    return (
        <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>{props.cardName}</Text>
        </TouchableOpacity>
    )
}