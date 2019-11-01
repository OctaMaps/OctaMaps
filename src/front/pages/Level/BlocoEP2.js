import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from '../../../component/NewHeader';
import Info from '../../../component/text/EP2';

export default class BlocoEP2 extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../../images/Level/BlocoEP2.png')} style={{width: '100%', height: '100%'}}>
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

const header = StyleSheet.create({
  header:{
    height:65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});
