import React from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TouchableTransform from '../../components/touchableTransform'

import Index from '../../images/Index.png';
import getPercentage from '../../utils/getPercentage';
import getOriginalSize from '../../utils/getOriginalSize';

import Header from '../../components/header';

export default function Main(props) {
  let percentage = getPercentage;
  let original = getOriginalSize;
  
  let createTouchable = ( l, t, h, w, trans, backgroundColor, name) => {
    return (
      <TouchableTransform 
        array={[l, t, h, w]}
        trans={trans}
        backgroundColor={backgroundColor}
        name={name} 
        onPressed={() => props.navigation.navigate('Floor', { screen: name, percentage, original } )} 
      />
    )
  }

  return (
    <>
    <StatusBar hidden StatusBarAnimation={'fade'} style="light" />
    <ImageBackground 
      blurRadius={20}
      source={Index}
      style={{ width: '100%', height: '100%' }}
    >

      <ImageBackground 
        fadeDuration={2}
        resizeMethod={'scale'}
        style={{     
          ...StyleSheet.absoluteFillObject,
          opacity: 0.8,
          width: original[0]/percentage[0],
          height: original[1]/percentage[1],
          borderRadius: 40
        }}
        blurRadius={0}
        source={Index}
      > 
        <Header 
          leftIcon={'menu'} 
          leftPress={() => props.navigation.openDrawer()}
        />

        {  
          createTouchable(260, 30, 750, 70, [2, 14], 'orange', 'B')
        }
        {
          createTouchable(170, 720, 60, 80, [0, -20], 'orange', 'B')
        }
        {
          createTouchable(210, 265, 80, 120, [0, 100], 'orange', 'B')
        }
        {
          createTouchable(2, 594, 100, 140, [0, 12], 'blue', 'A')
        }
        {
          createTouchable(2, 250, 100, 220, [0, 8], 'gray', 'F')
        }
        {
          createTouchable(100, 70, 140, 180, [0, 8], 'gray', 'F')
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
        </ImageBackground>
      </ImageBackground>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute'
  },
});

// <Button onPress={() => props.navigation.openDrawer()} title="Go back home" />
