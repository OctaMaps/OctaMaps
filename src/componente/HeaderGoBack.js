import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={header.header}>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={35} style ={styles.icon}name="arrow-left" onPress={() => this.props.navigation.goBack()}/>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={35} style ={styles.icon}name="search" onPress={() => this.props.navigation.navigate('Pesquisa')} /> 
          </View>
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

