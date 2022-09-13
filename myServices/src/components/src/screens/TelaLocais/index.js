import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Styles from './style';

import Card from '../../components/Card';

export default function TelaLocais(){
    return (
        <View style={Styles.background}>
            <Text style={Styles.title}>Locais</Text>
            <ScrollView style={Styles.scrollView}>
                <Card cardName="Restaurante"></Card>
                <Card cardName="Loja"></Card>
                <Card cardName="Posto"></Card>
                <Card cardName="Borracharia"></Card>
                <Card cardName="Mecânica"></Card>
                <Card cardName="Farmácia"></Card>
            </ScrollView>
        </View>
    );
}
