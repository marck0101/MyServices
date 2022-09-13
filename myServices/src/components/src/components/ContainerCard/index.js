import {View} from 'react-native';
import Card from '../Card';

export default function ContainerCard(props){
    return(
        <View style={{flexDirection: 'row'}}>
            <Card cardName={props.cardName1}></Card>
            <Card cardName={props.cardName2}></Card>
        </View>
    )
};