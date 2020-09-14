import React from 'react';
import { TouchableOpacity } from 'react-native';
import getPercentage from '../../utils/getPercentage';

export default function TouchableTransform(props) {
    let percentage = getPercentage;

    // array = [left, top, height, width].
    let { array=[0, 0, 0, 0], trans=[0,0], backgroundColor="red", name="", onPressed={} } = props;  


    if(array.length > 4) {
        console.error("You have passed a lot of elements in Array. It should contain Left, Top, Height and Width values only.")
        return null
    }

    let createTouchable = (l, t, h, w, trans, backgroundColor, name) => {
        return (
        <TouchableOpacity 
            style={
            {
                position: 'absolute',
                left: l/percentage[0],
                height: h/percentage[1],
                width: w/percentage[0],
                top: t/percentage[1],
                backgroundColor,
                transform: [
                { rotateY: `${trans[0]}deg` },
                { rotateZ: `${trans[1]}deg` }
                ]
            }
            } 
            onPress={() => onPressed()} 
        />
        )
    }

    return createTouchable(array[0], array[1], array[2], array[3], trans, backgroundColor, name, onPressed);
}
