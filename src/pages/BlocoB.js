import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import NewHeader from '../component/NewHeader';
import { Video } from 'expo';

export default class BlocoB extends React.Component {
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
      this.setState({
        estado:false
        })
      },1000)
  }

  render() {
    return (
      <View style={styles.container}>
      { this.state.estado
        ?
          <Video
              source={require('../videos/BlocoB.mp4')}
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
          null 
      }

          <ImageBackground source={require('../imagens/BlocoB.png')} style={{width: '100%', height: '100%'}}>
            <NewHeader></NewHeader>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});

const header = StyleSheet.create({
  header:{
    height:65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});

