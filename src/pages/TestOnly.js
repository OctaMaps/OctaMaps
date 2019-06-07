import React from 'react';
import { StyleSheet, Text, View, Image,Button, ImageBackground,ActivityIndicator,TouchableWithoutFeedback,Picker,ProgressBarAndroid,ToastAndroid,Platform} from 'react-native';
import { withNavigationFocus,NavigationEvents  } from 'react-navigation';
  
import { Video } from 'expo';
const a =  " ";

class TestOnly extends React.Component {

  constructor(props){         
    super(props);
    this.state = {
      estado: true
    };
  }

 componentDidMount(){
    this.props.navigation.addListener('willFocus',
      ()=>{
        this.setState({estado:true})
        console.log("Video Permetido. Carregamento deve começar..")
        console.log("o state é", this.state.estado," o props é ", this.props.transitionIs)
      }
    )
  }

  onLoadStart(){
    console.log("Carregando video..")
  }

  onLoad(){
     setTimeout(()=>{
      console.log("Video Terminado")
      this.setState({
        estado:false
        })
      },1200)
  }

  onError(){
    console.log('Error Happen')
  }

  search() {
    switch (this.props.transitionIs) {
      case 'Bloco A':
        return require('../videos/BlocoA.mp4');
      case 'Bloco B':
        return require('../videos/BlocoB.mp4');
      case 'Bloco C':
        return require('../videos/BlocoC.mp4');
      case 'Bloco D':
        return require('../videos/BlocoD.mp4');
      case 'Bloco E':
        return require('../videos/BlocoE.mp4');
      case 'Bloco F':
        return require('../videos/BlocoF.mp4');
      default:
        return require('../videos/BlocoA.mp4');
    }
  }

  render() {
    return (
      <View>
       {this.props.estado ? 
          <Video
            source={require('../videos/BlocoA.mp4')}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping={false}
              onError={() => this.onError()}
              onLoad={() => this.onLoad()}
              onLoadStart={() => this.onLoadStart()}
              style={{ width: '100%', height: '100%' }}
          />
        : <Text> asdasd </Text> 
      }
      </View>
    );
  } 
}

export default withNavigationFocus(TestOnly)

/*

  componentWillMount(){
   console.log(this.props.isFocused)
   console.log(this.props.isFocused)
   console.log(this.props.isFocused)
   console.log(this.props.isFocused)
   console.log(this.props.isFocused)
  }


  <NavigationEvents
      onWillFocus={payload => console.log('will focus',payload)}
      onDidFocus={payload => console.log('did focus',payload)}
      onWillBlur={payload => console.log('will blur',payload)}
      onDidBlur={payload => console.log('did blur',payload)}
    />
        <Image
          style={{width: 300, height: 200}}
          source={{uri: 'https://media3.giphy.com/media/wWue0rCDOphOE/giphy.gif'}} />
        <TestOnly2> </TestOnly2>
        {this.props.isFocused ?
          <Text> Focus </Text>
          :
          <Text> Not focus</Text>
        }

 */