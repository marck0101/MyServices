import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';

const Styles = StyleSheet.create({
    itemBackground: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 2,
        padding: 20,
        borderRadius: 30,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 20,
        color: 'white',
        width: 140,
    }
})

export default function Item(props){
    return(
        <View style={Styles.itemBackground}>
            <Text style={Styles.itemText}>{props.itemName}</Text>
            <TouchableOpacity><FontAwesome name="info-circle" size={24} color="gray"/></TouchableOpacity>
            <TouchableOpacity><FontAwesome name="map-marker" size={24} color="gray"/></TouchableOpacity>
            <TouchableOpacity><Feather name="phone-call" size={24} color="purple"/></TouchableOpacity>
        </View>
    )
}