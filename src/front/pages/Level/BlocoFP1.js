import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import Header from '../../../component/NewHeader';


export default class BlocoFP1 extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../../images/Level/BlocoFP1.jpg')} style={{width: '100%', height: '100%'}}>
            <Header searchableOff/>
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
