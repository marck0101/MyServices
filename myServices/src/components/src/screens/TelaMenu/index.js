import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './style';

export default function TelaMenu(){
    return(
        <View style={Styles.background}>
            <TouchableOpacity style={Styles.button}>
                <Text style={Styles.buttonText}>Serviços</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button}>
                <Text style={Styles.buttonText}>Locais</Text>
            </TouchableOpacity>
        </View>
    )
}