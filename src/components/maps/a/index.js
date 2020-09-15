import React from 'react';
import { View } from 'react-native';
import TouchableTransform from '../../touchableTransform'

function Mapa() {
    let debug = false;
    let floor3 = () => {
        
    }
    let floor2 = () => {
        
    }
    let floor1 = () => {
        
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