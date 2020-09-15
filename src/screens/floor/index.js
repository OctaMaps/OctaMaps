import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ImageBackground } from 'react-native';
import { Video } from 'expo-av';

import Header from '../../components/header';

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

import MapaF from '../../components/maps/f';
import MapaE from '../../components/maps/e';
import MapaD from '../../components/maps/d';
import MapaC from '../../components/maps/c';
import MapaB from '../../components/maps/b';
import MapaA from '../../components/maps/a';

export default function Floor(props) {
  let { params } = props.route;
  let { isBacked = false } = props;
  let { screen, percentage, original } = params;  
  let [videoShow, setVideoShow] = useState(true);
  
  useEffect(() => {
    !isBacked && setVideoShow(true); 
  }, [] )

  let Index;
  let FloorMap;

  switch(screen) {
    case 'A':
      Index = BlocoA
      FloorMap = MapaA
      break;
    case 'B':
      Index = BlocoB
      FloorMap = MapaB
      break;
    case 'C':
      Index = BlocoC
      FloorMap = MapaC
      break;
    case 'D':
      Index = BlocoD
      FloorMap = MapaD
      break;
    case 'E': {
      Index = BlocoE
      FloorMap = MapaE
      break;
    }
    case 'F':
      Index = BlocoF
      FloorMap = MapaF
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

  let showVideo = () => {
    return (
      <Video
          source={selectVideo()}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode={'cover'}
          shouldPlay
          onLoadStart={() => console.log('loading.')}
          onLoad={() => onLoad()}
          onError={() => console.log('error')}
          onEnd={() => console.log('ended')}
          style={{ width: '100%', height: '100%' }}
        />
    )
  }

  let showContent = () => {
    return (
      <ImageBackground 
          fadeDuration={300}
          resizeMethod={'scale'}
          style={{     
            ...StyleSheet.absoluteFillObject,
            opacity: 0.8,
            width: original[0]/percentage[0],
            height: original[1]/percentage[1],
            borderRadius: 40,
          }}
          blurRadius={0}
          source={Index}
          >
          <Header/> 
          {FloorMap && <FloorMap/>} 
        </ImageBackground>
    )
  }

   return (  
    <>
      {
        videoShow 
          ? showVideo()
          : showContent()
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
