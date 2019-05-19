import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { withNavigationFocus,NavigationEvents } from 'react-navigation';
import { Video } from 'expo';


class makeVideo extends React.Component {
  constructor(props){         
    super(props);
    this.state = {
      videoName: 'naoSei'
    };
  }


  render(){
    return(
        <View>
        {this.props.on 
          ?
             <Video
              source={require('../videos/BlocoF.mp4')}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping={false}
              onError={() => console.log('SS')}
              onLoad={() => console.log('Iniciando Video.')}
              onLoadStart={() => console.log("carregando video..")}
              onEnd={()=> console.log("Acabou")}
              style={{ width: '100%', height: '100%' }}
           />
          : 
            null
        }
         
        </View>
      );

  }


}


export default withNavigationFocus(makeVideo)
