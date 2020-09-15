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
    let art = () => {
        
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