import { View, ScrollView, Text } from 'react-native';
import Styles from './style';

import Item from '../../components/Item';

export default function TelaCategoria(){
    return (
        <View style={Styles.background}>
            <Text style={Styles.title}>Farmácias</Text>
            <ScrollView style={Styles.scrollView}>
                <Item itemName="São João"></Item>
                <Item itemName="Farmácia MB"></Item>
                <Item itemName="Associadas"></Item>
                <Item itemName="Medfarma"></Item>
                <Item itemName="Farmácia Central"></Item>
            </ScrollView>
        </View>
    )
}