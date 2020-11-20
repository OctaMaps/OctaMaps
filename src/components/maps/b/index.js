import React from 'react';
import { View } from 'react-native';
import TouchableTransform from '../../touchableTransform'
import { useNavigation } from '@react-navigation/native'

function Mapa() {
    let debug = false;
    let navigation = useNavigation();
    let bloco = "B"

    let floor3 = () => {
        navigation.navigate('Step', { bloco, piso: '2' })
    }
    let floor2 = () => {
        navigation.navigate('Step', { bloco, piso: '1' })

    }
    let floor1 = () => {
        navigation.navigate('Step', { bloco, piso: '0' })

    }
    let art = () => {
        navigation.navigate('Step', { bloco, piso: '0' })
    }

    return (
        <View>
            <TouchableTransform 
                array={[-60, 250, 48, 460]}
                trans={[0, -38]}
                backgroundColor={debug ? "orange" : "transparent"}
                onPressed={() => floor1()}
            />
            
            <TouchableTransform 
                array={[-60, 200, 48, 460]}
                trans={[0, -38]}
                backgroundColor={debug ? "white" : "transparent"}
                onPressed={() => floor2()}
            />

            <TouchableTransform 
                array={[-60, 155, 48, 460]}
                trans={[0, -35]}
                backgroundColor={debug ? "lightblue" : "transparent"}
                onPressed={() => floor3()}
            />
            <TouchableTransform 
                array={[-60, 130, 48, 410]}
                trans={[0, -32]}
                backgroundColor={debug ? "lightblue" : "transparent"}
                onPressed={() => floor3()}
            />
            <TouchableTransform 
                array={[365, 110, 40, 50]}
                trans={[0, -60]}
                backgroundColor={debug ? "cyan" : "transparent"}
                onPressed={() => art()}
            />
            

           
        </View>
    )
}

export default Mapa