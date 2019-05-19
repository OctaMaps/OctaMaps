import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { withNavigationFocus,NavigationEvents } from 'react-navigation';
import { Video } from 'expo';

// nao mechi mais por conta que nao tava conseguindo deixar dinamico e parti para avançar o projeto, possivel refactory mais tarde
class makeVideo extends React.Component {
  constructor(props){         
    super(props);
    this.state = {
      estado: true,
      caminho: null
    };
  }


filtrarCaminho(){

  switch(this.state.caminho){
    case'BlocoA':
      console.log("deu certo")
    case'Bloco B':

    case'Bloco C':

    case'Bloco D':

    case'Bloco E':

    case'Bloco F':
  }

}


retornarCaminho(){

}
 componentDidMount(){
  // setando bloco para usar depois como state
    this.setState({caminho: this.props.bloco}, this.filtrarCaminho())

    const {navigation} = this.props;
    
    // para o video ser dinamico

    // para video ser mostrado toda vez que a tela for carregada
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
      },1200)
  }

  render(){
    return(
        <View>
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
             null
         }
      </View>
      );

  }


}


export default withNavigationFocus(makeVideo)
