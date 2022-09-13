import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Styles from './style';

import Card from '../../components/Card';
import ContainerCard from '../../components/ContainerCard';

export default function TelaServicos(){
    return (
        <View style={Styles.background}>
            <Text style={Styles.title}>Serviços</Text>
            <ScrollView style={Styles.scrollView}>
                <Card cardName="Mecânico"></Card>
                <Card cardName="Guincho"></Card>
                <Card cardName="Encanador"></Card>
            </ScrollView>
        </View>
    );
}