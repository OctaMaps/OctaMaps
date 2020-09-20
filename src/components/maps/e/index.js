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
                array={[0, 420, 60, 300]}
                trans={[0, 34]}
                backgroundColor={debug ? "green" : "transparent"}
                onPressed={() => floor1()}
            />

             <TouchableTransform 
                array={[-20, 350, 80, 360]}
                trans={[0, 32]}
                backgroundColor={debug ? "orange" : "transparent"}
                onPressed={() => floor2()}
            />

            <TouchableTransform 
                array={[-20, 294, 80, 390]}
                trans={[0, 30]}
                backgroundColor={debug ? "green" : "transparent"}
                onPressed={() => floor3()}                
            />
            
            <TouchableTransform 
                array={[0, 232, 120, 420]}
                trans={[0, 25]}
                backgroundColor={debug ? "green" : "transparent"}
                onPressed={() => floor3()}            
            />
            <TouchableTransform 
                array={[330, 380, 100, 50]}
                trans={[0, 60]}
                backgroundColor={debug ? "green" : "transparent"}
                onPressed={() => floor3()}           
            />
           
        </View>
    )
}

export default Mapa