import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import NewHeader from '../../component/NewHeader';


export default class BlocoDTerreo extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../../imagens/Pisos/BlocoDTerreo.jpg')} style={{width: '100%', height: '100%'}}>
            <NewHeader></NewHeader>
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
