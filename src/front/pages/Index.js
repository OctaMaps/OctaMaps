import React from 'react';
import {View, ImageBackground, ActivityIndicator} from 'react-native';

import Header from '../../component/NewHeader'  
import MapIndex from '../../component/maps/MapIndex' 

export default class Index extends React.Component {
  constructor(props){         
    super(props);
    this.state = {
      loader: true
    };
  }

  componentWillMount(){
    console.log("Animation Start")
    setTimeout( () => {
       console.log("Animation Stop")
       this.setState({loader: false})
    },2000)

  }

  render() {
    return (
      <View style={{flex:1}}>
        {this.state.loader 
          ? 
            <ImageBackground source={require('../images/Others/load.png')} style={{flex:1}}>
              <ActivityIndicator style={{marginTop: '150%'}} size="large" color="#1a587d" />
            </ImageBackground> 
          :
            <ImageBackground source={require('../images/Index.png')} style={{width: '100%', height: '100%'}}>
              <Header iconHamburguer  />
              <MapIndex/>
            </ImageBackground> 
        }              
      </View>
    );
  }
}

