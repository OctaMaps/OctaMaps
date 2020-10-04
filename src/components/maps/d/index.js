import React from 'react';
import { View } from 'react-native';
import TouchableTransform from '../../touchableTransform'
import { useNavigation } from '@react-navigation/native'

function Mapa() {
    let debug = false;
    let navigation = useNavigation();
    let bloco = "D";

    let floor2 = () => {
        navigation.navigate('Step', { bloco, piso: '0' })
    }
    let floor1 = () => {
        navigation.navigate('Step', { bloco, piso: '1' })
    }

    return (
        <View>
             <TouchableTransform 
                array={[10, 380, 60, 320]}
                trans={[0, 25]}
                backgroundColor={debug ? "orange" : "transparent"}
                onPressed={() => floor1()}
            />

            <TouchableTransform 
                array={[0, 310, 70, 350]}
                trans={[0, 23.8]}
                backgroundColor={debug ? "green" : "transparent"}
                onPressed={() => floor2()}                
            />
            
            <TouchableTransform 
                array={[0, 258, 90, 386]}
                trans={[0, 20]}
                backgroundColor={debug ? "green" : "transparent"}
                onPressed={() => floor2()}            
            />
           
        </View>
    )
}

export default Mapa