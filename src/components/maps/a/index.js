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

    return (
        <View>
            <TouchableTransform 
                array={[-20, 340, 80, 240]}
                trans={[0, 20]}
                backgroundColor={debug ? "lightblue" : "transparent"}
                onPress={() => floor1()}
            />

             <TouchableTransform 
                array={[-20, 260, 80, 235]}
                trans={[0, 17]}
                backgroundColor={debug ? "orange" : "transparent"}
                onPress={() => floor2()}
            />

            <TouchableTransform 
                array={[-20, 180, 80, 250]}
                trans={[0, 14]}
                backgroundColor={debug ? "green" : "transparent"}
                onPress={() => floor3()}                
            />

            <TouchableTransform 
                array={[200, 212, 80, 50]}
                trans={[0, 56]}
                backgroundColor={debug ? "red" : "transparent"}
                onPress={() => floor3()}                
            />
            

            <TouchableTransform 
                array={[-20, 129, 90, 384]}
                trans={[0, 12]}
                backgroundColor={debug ? "green" : "transparent"}
                onPress={() => floor3()}            
            />

            <TouchableTransform 
                array={[340, 170, 100, 65]}
                trans={[0, 10]}
                backgroundColor={debug ? "orange" : "transparent"}
                onPress={() => floor3()}            
            />

        </View>
    )
}

export default Mapa