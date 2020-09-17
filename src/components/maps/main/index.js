import React from 'react';
import TouchableTransform from '../../touchableTransform'

import { useNavigation } from '@react-navigation/native'
import percentage from "../../../utils/getPercentage"
import original from "../../../utils/getOriginalSize"

function Mapa() {
    let debug = false;
    let navigation = useNavigation();
    let createTouchable = ( l, t, h, w, trans, backgroundColor, name) => {
        return (
          <TouchableTransform 
            array={[l, t, h, w]}
            trans={trans}
            backgroundColor={debug ? backgroundColor : 'transparent'}
            name={name} 
            onPressed={() => navigation.navigate('Floor', { screen: name, percentage, original } )} 
          />
        )
    }

    return (
        <>
            {  
            createTouchable(260, 30, 750, 70, [2, 14], 'orange', 'B')
            }
            {
            createTouchable(170, 720, 100, 80, [0, -20], 'orange', 'B')
            }
            {
            createTouchable(210, 265, 90, 120, [0, 100], 'orange', 'B')
            }
            {
            createTouchable(380, 100, 50, 60, [0, 100], 'red', 'B')
            }
            {
            createTouchable(2, 620, 100, 140, [0, 12], 'blue', 'A')
            }
            {
            createTouchable(2, 250, 100, 220, [0, 8], 'gray', 'F')
            }
            {
            createTouchable(100, 50, 150, 180, [0, 8], 'gray', 'F')
            }
            {
            createTouchable(0, 356, 60, 230, [0, 8], 'red', 'E')
            }
            {
            createTouchable(0, 430, 80, 190, [0, 10], 'green', 'D')
            }
            {
            createTouchable(0, 516, 75, 169, [0, 10], 'orange', 'C')
            }
        </>
    )
}

export default Mapa