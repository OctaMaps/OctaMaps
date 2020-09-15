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
                array={[-50, 350, 120, 300]}
                trans={[0, 30]}
                backgroundColor={debug ? "orange" : "transparent"}
                onPress={() => floor1()}
            />
            <TouchableTransform 
                array={[184, 490, 80, 40]}
                trans={[0, 30]}
                backgroundColor={debug ? "red" : "transparent"}
                onPress={() => floor1()}
            />
            <TouchableTransform 
                array={[0, 325, 53, 280]}
                trans={[0, 25]}
                backgroundColor={debug ? "blue" : "transparent"}
                onPress={() => floor1()}
            />

            <TouchableTransform 
                array={[200, 160, 180, 240]}
                trans={[0, 20]}
                backgroundColor={debug ? "lightblue" : "transparent"}
                onPress={() => floor2()}
            />

        </View>
    )
}

export default Mapa