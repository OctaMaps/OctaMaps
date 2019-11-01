import React from 'react';
import { StyleSheet, View ,Dimensions, Image} from 'react-native';
import { withNavigationFocus,NavigationEvents, Text} from 'react-navigation';
import { Video } from 'expo-av';
import Header from '../../../component/NewHeader'
import MapIndex from '../../../component/maps/MapIndex'
const { width, height } = Dimensions.get("window");


 class BackVideo extends React.Component {
  constructor(props){         
    super(props);
    this.state = {
      videoOn: false
    };
  }

  
  //Funçoes executadas no Video
  onError(err){
    console.log("Error Happen: ", err)
  }

  onLoadStart(){
    console.log("Carregando Video.")
  }

  onLoad(){
    setTimeout( () => {
       console.log("Video Terminado")
       this.setState({videoOn: false})
    },1300)
  }



  render() {
    return (
      <View>
           <Image source={{uri: 'https://media.giphy.com/media/xUOxf34uHq8VolxF7y/giphy.gif'}} style={{width: 300, height: 300}} />
            <View style={{marginTop: '-10%'}}>
              <Header></Header>
            </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
  }
});


export default withNavigationFocus(BackVideo)

