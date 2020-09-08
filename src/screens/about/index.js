import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';

import Index from '../../images/Others/Sobre.jpg';
import getPercentage from '../../utils/getPercentage';
import getOriginalSize from '../../utils/getOriginalSize';

import Header from '../../components/header';
import { useTheme } from '@react-navigation/native';

export default function Main() {
  const { colors } = useTheme();
  console.log(colors)
  let percentage = getPercentage;
  let original = getOriginalSize;

  return (
    <>
    
    <ImageBackground 
      blurRadius={20}
      source={Index}
      style={{ width: '100%', height: '100%' }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

        <Text style={{ color: '#fff' }}>Notice that the status bar has light text!</Text>
      </View>
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