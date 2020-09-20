import React from 'react';
import { View } from 'react-native';
import TouchableTransform from '../../touchableTransform'
import { useNavigation } from '@react-navigation/native'

function Mapa() {
    let debug = false;
    let navigation = useNavigation();


    let floor3 = () => {
        navigation.navigate('Step')

    }
    let floor2 = () => {
        navigation.navigate('Step')

    }
    let floor1 = () => {
        navigation.navigate('Step')

    }
    let art = () => {
        navigation.navigate('Step')

    }

    return (
        <View>
            <TouchableTransform 
                array={[-60, 250, 48, 460]}
                trans={[0, -38]}
                backgroundColor={debug ? "orange" : "transparent"}
                onPress={() => floor1()}
            />
            
            <TouchableTransform 
                array={[-60, 200, 48, 460]}
                trans={[0, -38]}
                backgroundColor={debug ? "white" : "transparent"}
                onPress={() => floor2()}
            />

            <TouchableTransform 
                array={[-60, 155, 48, 460]}
                trans={[0, -35]}
                backgroundColor={debug ? "lightblue" : "transparent"}
                onPress={() => floor3()}
            />
            <TouchableTransform 
                array={[-60, 130, 48, 410]}
                trans={[0, -32]}
                backgroundColor={debug ? "lightblue" : "transparent"}
                onPress={() => floor3()}
            />
            <TouchableTransform 
                array={[365, 110, 40, 50]}
                trans={[0, -60]}
                backgroundColor={debug ? "cyan" : "transparent"}
                onPress={() => art()}
            />
            

           
        </View>
    )
}

export default Mapa