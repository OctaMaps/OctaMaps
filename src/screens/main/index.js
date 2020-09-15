import React from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from '../../components/header';
import Mapa from '../../components/maps/main'

import getPercentage from '../../utils/getPercentage';
import getOriginalSize from '../../utils/getOriginalSize';

import Index from '../../images/Index.png';


export default function Main(props) {
  let percentage = getPercentage;
  let original = getOriginalSize;
  

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
          <Mapa/>
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
