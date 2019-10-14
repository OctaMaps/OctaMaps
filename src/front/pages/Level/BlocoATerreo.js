import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from '../../../component/NewHeader';

import Info from '../../../component/text/TAT';

export default class BlocoATerreo extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../../images/Level/BlocoATerreo.jpg')} style={{width: '100%', height: '100%'}}>
            <Header searchableOff/>
            <Info/>
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


