import React, { useEffect } from 'react';
import { Text, View, Image, Animated, Easing  } from 'react-native';

import Logo from '../../images/Others/logo.png';
import Header from '../../components/header'

import percentage from '../../utils/getPercentage';

function Step(props){
    let RotateValueHolder = new Animated.Value(0);

    let StartImageRotateFunction = () => {
        RotateValueHolder.setValue(0);
        Animated.timing(RotateValueHolder, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true
        }).start(() => StartImageRotateFunction());
    }

    useEffect(() => {
        StartImageRotateFunction()
    }, []);

    let RotateData = RotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return(
        <View style={{backgroundColor: '#fff', height: '100%'}}>
            <Header/>
            <View 
                style={{ 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    paddingTop: 100/percentage[1],
                }}>
                 <Animated.Image
                    style={{
                        width: 200,
                        height: 200,
                        transform: [{ rotate: RotateData }],
                    }}
                    source={Logo}
                />

<Text style={{ fontSize: 14, marginTop: 300/percentage[1]}}> Essa tela ainda está sendo feita!</Text>
<Text style={{ fontSize: 12, marginTop: 10/percentage[1]}}> Hehe!</Text>
            </View>
        </View>
    )
}

export default Step