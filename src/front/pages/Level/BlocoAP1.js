import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from '../../../component/NewHeader';
import Info from '../../../component/text/TA1';


export default class BlocoAP1 extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../../images/Level/BlocoAP1.jpg')} style={{width: '100%', height: '100%'}}>
          <Header searchableOff></Header>
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

//goTrue faz a tela retornar para o bloco correspondente ao invez de home.

