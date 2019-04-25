import React from 'react';
import { StyleSheet, Text, View, Image,Button, ImageBackground,ActivityIndicator,TouchableWithoutFeedback,Picker,ProgressBarAndroid,ToastAndroid,Platform} from 'react-native';
import { withNavigationFocus,NavigationEvents  } from 'react-navigation';
  
import { Video } from 'expo';


class TestOnly extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videoOn: this.props.showVideo,
      videoBloco: this.props.videoBloco
    };
  }


 

  console() {
    console.log("iniciando video..")
    setTimeout(() => {
      this.setState({videoOn: false})
      this.props.navigation.navigate(this.state.videoBloco)

    }, 1000)
  }

  search() {
    this.setState({videoOn: this.pros})
    switch (this.state.videoBloco) {
      case 'Bloco A':
        return require('../videos/BlocoA.mp4');
      case 'Bloco B':
        return require('../videos/BlocoB.mp4');
      case 'Bloco C':
        return require('../videos/BlocoC.mp4');
      case 'Bloco D':
        return require('../videos/BlocoC.mp4'); // preciso arruamr
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
       {this.props.showVideo ? 
          <Video
            source={this.search()}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping={false}
            onError={() => console.log('SS')}
            onLoad={() => this.console()}
            onLoadStart={() => console.log("carregando video..")}
            style={{ width: '100%', height: '100%' }}
          />
        : null
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