import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../component/NewHeader';

export default class Sobre extends React.Component {
  
  render() {
    return ( 
      <View style={{flex:1, backgroundColor: '#1a587d'}}>

      	<Header bluewallpaper searchableOff/>
		<Image 
				source={require('../images/Others/Sobre.jpg')}          
				style={{width: '100%', height: '100%'}}
				resizeMode="stretch"
		/>
		
      </View>
    );
  }
}

