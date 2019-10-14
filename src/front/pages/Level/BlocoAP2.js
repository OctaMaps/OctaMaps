import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from '../../../component/NewHeader';
import Info from '../../../component/text/TA2';


export default class BlocoAP2 extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../../images/Level/BlocoAP2.png')} style={{width: '100%', height: '100%'}}>
            <Header searchableOff/>
            <Info></Info>
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

