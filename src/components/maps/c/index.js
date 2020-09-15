import React from 'react';
import { View } from 'react-native';
import TouchableTransform from '../../touchableTransform'

function Mapa() {
    let debug = false;
    let floor2 = () => {
        
    }
    let floor1 = () => {
        
    }

    return (
        <View>
             <TouchableTransform 
                array={[22, 465, 80, 400]}
                trans={[0, -5]}
                backgroundColor={debug ? "orange" : "transparent"}
                onPress={() => floor1()}
            />

            <TouchableTransform 
                array={[10, 380, 84, 410]}
                trans={[0, -5]}
                backgroundColor={debug ? "blue" : "transparent"}
                onPress={() => floor2()}
            />

            <TouchableTransform 
                array={[4, 320, 70, 410]}
                trans={[0, -5]}
                backgroundColor={debug ? "lightblue" : "transparent"}
                onPress={() => floor2()}
            />
        </View>
    )
}

export default Mapa