import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import NewHeader from '../component/NewHeader';
import MapA from '../component/maps/MapA';
import { Video } from 'expo';


export default class BlocoA extends React.Component {
  constructor(props){         
    super(props);
    this.state = {
      estado: true
    };
  }

 componentDidMount(){
    const {navigation} = this.props;
    navigation.addListener('willFocus',
      ()=>{
        this.setState({estado:true})
        console.log("Video Permetido.")
      }
    )
  }

  onEnd(){
     setTimeout(()=>{
      console.log("Video Terminado")
      this.setState({
        estado:false
        })
      },1200)
  }


  render() {
    return (
      <View style={styles.container}>
      { this.state.estado
        ?
          <Video
              source={require('../videos/BlocoA.mp4')}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping={false}
              onError={() => console.log('Error Happen')}
              onLoad={() => this.onEnd()}
              onLoadStart={() => console.log("carregando video..")}
              style={{ width: '100%', height: '100%' }}
           />
        :
            <ImageBackground source={require('../imagens/BlocoA.png')} style={{width: '100%', height: '100%'}}>
              <NewHeader/>
              <MapA/>
            </ImageBackground> 
      }

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
