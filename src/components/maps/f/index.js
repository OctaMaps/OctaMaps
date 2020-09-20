import React from 'react';
import { View } from 'react-native';
import TouchableTransform from '../../touchableTransform'

import { useNavigation } from '@react-navigation/native'
function Mapa() {
    let navigation = useNavigation();
    let debug = false;
    let floor2 = () => {
        navigation.navigate('Step', {piso: 'Piso 2 - F' })
    }
    let floor1 = () => {
        navigation.navigate('Step', {piso: 'Piso 1 - F' })
    }

    return (
        <View>
             <TouchableTransform 
                array={[-50, 350, 120, 300]}
                trans={[0, 30]}
                backgroundColor={debug ? "orange" : "transparent"}
                onPressed={() => floor1()}
            />
            <TouchableTransform 
                array={[184, 490, 80, 40]}
                trans={[0, 30]}
                backgroundColor={debug ? "red" : "transparent"}
                onPressed={() => floor1()}
            />
            <TouchableTransform 
                array={[0, 325, 53, 280]}
                trans={[0, 25]}
                backgroundColor={debug ? "blue" : "transparent"}
                onPressed={() => floor1()}
            />

            <TouchableTransform 
                array={[200, 160, 180, 240]}
                trans={[0, 20]}
                backgroundColor={debug ? "lightblue" : "transparent"}
                onPressed={() => floor2()}
            />

        </View>
    )
}

export default Mapa