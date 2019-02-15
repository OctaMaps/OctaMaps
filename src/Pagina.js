import React from 'react';
import {createDrawerNavigator,createAppContainer, DrawerItems,createStackNavigator} from 'react-navigation';

import * as Animatable from 'react-native-animatable'
import { View, Text, StyleSheet, TextInput, FlatList, Keyboard } from "react-native";
import Icon from 'react-native-vector-icons/Feather';


export default class Pagina extends React.Component {

  render() {
    return (
      
      <View style={{ flex: 1 }}>
        <View style={header.header}>
          <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={45} style ={styles.icon}name="arrow-left"/>
          <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={40} style ={styles.icon}name="search" />
        </View>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
