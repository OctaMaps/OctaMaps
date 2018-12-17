import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';






export default class Artes extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
          <ImageBackground source={require('../imagens/BlocoC.png')} style={{width: '100%', height: '100%'}}>
            <View style={header.header}>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={45} style ={styles.icon}name="arrow-left" onPress={() => this.props.navigation.openDrawer()}/>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={40} style ={styles.icon}name="search" />
          </View>
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

