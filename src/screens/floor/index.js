import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ImageBackground } from 'react-native';

import BlocoA from '../../images/BlocoA.png';
import BlocoB from '../../images/BlocoB.png';
import BlocoC from '../../images/BlocoC.png';
import BlocoD from '../../images/BlocoD.png';
import BlocoE from '../../images/BlocoE.png';
import BlocoF from '../../images/BlocoF.png';

import Header from '../../components/header';

export default function Floor(props) {
  let { params } = props.route;
  let { screen, percentage, original } = params;  

  let Index;
  switch(screen) {
    case 'A':
      Index = BlocoA
      break;
    case 'B':
      Index = BlocoB
      break;
    case 'C':
      Index = BlocoC
      break;
    case 'D':
      Index = BlocoD
      break;
    case 'E':
      Index = BlocoE
      break;
    case 'F':
      Index = BlocoF
      break;
  }

  return (
    <>
    <ImageBackground 
      blurRadius={200}
      source={Index}
      style={{ width: '100%', height: '100%' }}
    >
      <ImageBackground 
        fadeDuration={300}
        resizeMethod={'scale'}
        style={{     
          ...StyleSheet.absoluteFillObject,
          opacity: 0.8,
          width: original[0]/percentage[0],
          height: original[1]/percentage[1],
          marginTop: 40/percentage[1],
          borderRadius: 40
        }}
        blurRadius={0}
        source={Index}
      >
      <Header/>
      </ImageBackground>
    </ImageBackground>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
