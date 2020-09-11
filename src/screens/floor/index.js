import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ImageBackground } from 'react-native';

import BlocoA from '../../images/BlocoA.png';
import BlocoB from '../../images/BlocoB.png';
import BlocoC from '../../images/BlocoC.png';
import BlocoD from '../../images/BlocoD.png';
import BlocoE from '../../images/BlocoE.png';
import BlocoF from '../../images/BlocoF.png';

import VideoA from '../../videos/BlocoA.mp4';
import VideoB from '../../videos/BlocoB.mp4';
import VideoC from '../../videos/BlocoC.mp4';
import VideoD from '../../videos/BlocoD.mp4';
import VideoE from '../../videos/BlocoE.mp4';
import VideoF from '../../videos/BlocoF.mp4';

import Header from '../../components/header';
import { Video } from 'expo-av';

export default function Floor(props) {
  let { params } = props.route;
  let { screen, percentage, original } = params;  
  let [videoShow, setVideoShow] = useState(true);

  useEffect(() => {
    setVideoShow(true); 
  }, [] )

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

  let selectVideo = () => {
    switch(screen) {
      case 'A':
        return VideoA
      case 'B':
        return VideoB
      case 'C':
        return VideoC
      case 'D':
        return VideoD
      case 'E':
        return VideoE
      case 'F':
        return VideoF
    }
  }

  let onLoad = () => {
    setTimeout( () => {
      console.log("Video Terminado")
      setVideoShow(false)
   },1300)
  }

  return (
    <>
    {
      videoShow &&
        <Video
        source={selectVideo()}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        onLoadStart={() => console.log('loading.')}
        onLoad={() => onLoad()}
        onError={() => console.log('error')}
        onEnd={() => console.log('ended')}
        style={{ width: '100%', height: '100%' }}
      />
    }
    

      <ImageBackground 
        fadeDuration={300}
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
      <Header/>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
