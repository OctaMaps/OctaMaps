import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TouchableTransform from '../../touchableTransform'

function Mapa() {

    return (
        <View>
            <TouchableTransform 
                array={[0, 10, 30, 30]}
            />
        </View>
    )
}

export default Mapa